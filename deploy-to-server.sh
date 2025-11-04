#!/bin/bash

# meta-aicoding.com 一键部署脚本
# 服务器: 140.143.206.78
# 域名: meta-aicoding.com

set -e

echo "========================================="
echo "  meta-aicoding.com 一键部署"
echo "========================================="
echo ""

# 配置变量
SERVER_IP="140.143.206.78"
SERVER_USER="root"
DOMAIN="meta-aicoding.com"
PROJECT_DIR="/www/wwwroot/meta-aicoding.com"

# 1. 构建项目
echo "1. 构建 Vue 项目..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ 构建失败，dist 目录不存在"
    exit 1
fi

echo "✅ 项目构建成功"

# 2. 打包 dist 目录
echo ""
echo "2. 打包部署文件..."
tar -czf meta-aicoding-dist.tar.gz dist/
echo "✅ 文件打包完成"

# 3. 上传到服务器
echo ""
echo "3. 上传到服务器..."
scp meta-aicoding-dist.tar.gz $SERVER_USER@$SERVER_IP:/tmp/

echo "✅ 上传完成"

# 4. 在服务器上部署
echo ""
echo "4. 在服务器上部署..."
ssh $SERVER_USER@$SERVER_IP << 'ENDSSH'

echo "========================================="
echo "  服务器端部署"
echo "========================================="
echo ""

# 创建网站目录
echo "1. 创建网站目录..."
mkdir -p /www/wwwroot/meta-aicoding.com
mkdir -p /www/wwwlogs

# 备份旧文件（如果存在）
if [ -d "/www/wwwroot/meta-aicoding.com/index.html" ]; then
    echo "2. 备份旧文件..."
    mv /www/wwwroot/meta-aicoding.com /www/wwwroot/meta-aicoding.com.bak.$(date +%Y%m%d_%H%M%S)
    mkdir -p /www/wwwroot/meta-aicoding.com
fi

# 解压新文件
echo "3. 解压部署文件..."
cd /www/wwwroot/meta-aicoding.com
tar -xzf /tmp/meta-aicoding-dist.tar.gz --strip-components=1

# 设置权限
echo "4. 设置文件权限..."
chown -R www:www /www/wwwroot/meta-aicoding.com

# 创建 Nginx 配置
echo "5. 创建 Nginx 配置..."
cat > /www/server/panel/vhost/nginx/meta-aicoding.conf << 'EOF'
# HTTP 自动跳转 HTTPS
server {
    listen 80;
    server_name meta-aicoding.com www.meta-aicoding.com;
    return 301 https://meta-aicoding.com$request_uri;
}

# HTTPS 配置
server {
    listen 443 ssl http2;
    server_name meta-aicoding.com www.meta-aicoding.com;
    
    # SSL 证书
    ssl_certificate /etc/nginx/ssl/meta-aicoding.com_bundle.crt;
    ssl_certificate_key /etc/nginx/ssl/meta-aicoding.com.key;
    
    # SSL 优化
    ssl_session_timeout 5m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # 网站根目录
    root /www/wwwroot/meta-aicoding.com;
    index index.html index.htm;
    
    # 日志
    access_log /www/wwwlogs/meta-aicoding-access.log;
    error_log /www/wwwlogs/meta-aicoding-error.log;
    
    # Hash 模式路由支持（所有路径都返回 index.html）
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存优化
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
}
EOF

# 测试 Nginx 配置
echo "6. 测试 Nginx 配置..."
/www/server/nginx/sbin/nginx -t

if [ $? -ne 0 ]; then
    echo "❌ Nginx 配置测试失败"
    exit 1
fi

# 重新加载 Nginx
echo "7. 重新加载 Nginx..."
/www/server/nginx/sbin/nginx -s reload

# 清理临时文件
echo "8. 清理临时文件..."
rm -f /tmp/meta-aicoding-dist.tar.gz

echo ""
echo "✅ 服务器端部署完成！"
echo ""
echo "部署信息："
echo "  - 网站目录: /www/wwwroot/meta-aicoding.com"
echo "  - 文件数量: $(find /www/wwwroot/meta-aicoding.com -type f | wc -l)"
echo "  - 总大小: $(du -sh /www/wwwroot/meta-aicoding.com | awk '{print $1}')"
echo ""

ENDSSH

# 5. 清理本地临时文件
echo ""
echo "5. 清理本地临时文件..."
rm -f meta-aicoding-dist.tar.gz

echo ""
echo "========================================="
echo "  🎉 部署完成！"
echo "========================================="
echo ""
echo "访问地址："
echo "  - https://meta-aicoding.com"
echo "  - https://www.meta-aicoding.com"
echo ""
echo "测试访问："
echo "  curl -I https://meta-aicoding.com"
echo ""
echo "注意："
echo "  - 请确保 DNS 已解析到 140.143.206.78"
echo "  - 首次访问可能需要清除浏览器缓存"
echo ""
echo "========================================="

