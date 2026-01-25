# 部署说明

## Cloudflare Pages 部署

### 前置要求

1. GitHub 仓库已创建
2. Cloudflare R2 存储桶已创建（名称：imageupload）
3. R2 API 凭证已获取
4. 域名 `image-upload.app` 已配置

### 步骤 1: 配置 Cloudflare R2

1. 登录 Cloudflare Dashboard
2. 进入 R2 > 创建存储桶
3. 存储桶名称：`imageupload`
4. 创建 API 令牌：
   - 进入 R2 > Manage R2 API Tokens
   - 创建令牌，授予对 `imageupload` 存储桶的读写权限
   - 保存 `Access Key ID` 和 `Secret Access Key`

5. 配置公共访问：
   - 在存储桶设置中启用公共访问
   - 添加自定义域名：`image-upload.app`
   - 按照 Cloudflare 的指示配置 DNS 记录

### 步骤 2: 配置 Cloudflare Pages

1. 在 Cloudflare Dashboard 中进入 Pages
2. 点击 "Create a project" > "Connect to Git"
3. 选择你的 GitHub 仓库
4. 配置构建设置：
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (项目根目录)

5. 添加环境变量：
   ```
   R2_ACCOUNT_ID=b4e60706d3e02cb2b9bb5758df040e12
   R2_BUCKET_NAME=imageupload
   R2_ACCESS_KEY_ID=你的访问密钥ID
   R2_SECRET_ACCESS_KEY=你的秘密访问密钥
   R2_PUBLIC_URL=https://image-upload.app
   NEXT_PUBLIC_GA_MEASUREMENT_ID=你的GA4测量ID（可选）
   ```

6. 保存并部署

### 步骤 3: 配置自定义域名

1. 在 Pages 项目设置中，进入 "Custom domains"
2. 添加域名：`image-upload.app`
3. 按照指示配置 DNS 记录

### 步骤 4: 验证部署

1. 访问 `https://image-upload.app`
2. 测试图片上传功能
3. 验证上传的图片可以通过生成的 URL 访问

## 本地开发

```bash
# 安装依赖
npm install

# 创建 .env.local 文件（参考 .env.example）
# 添加必要的环境变量

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000

## 注意事项

1. **R2 公共访问配置**：确保 R2 存储桶已正确配置公共访问，否则上传的图片无法通过 URL 访问。

2. **CORS 配置**：如果遇到跨域问题，需要在 R2 存储桶设置中配置 CORS 规则：
   ```
   [
     {
       "AllowedOrigins": ["https://image-upload.app"],
       "AllowedMethods": ["GET", "HEAD"],
       "AllowedHeaders": ["*"],
       "ExposeHeaders": ["ETag"],
       "MaxAgeSeconds": 3600
     }
   ]
   ```

3. **文件大小限制**：当前限制为 10MB，可在 `lib/utils.ts` 中的 `validateImageFile` 函数中修改。

4. **Google Analytics**：如需使用 GA4，请在 Cloudflare Pages 环境变量中添加 `NEXT_PUBLIC_GA_MEASUREMENT_ID`。

## 故障排除

### 上传失败
- 检查 R2 API 凭证是否正确
- 确认 R2 存储桶名称正确
- 检查网络连接

### 图片无法访问
- 确认 R2 存储桶已启用公共访问
- 检查自定义域名配置
- 验证 DNS 记录是否正确

### 构建失败
- 检查 Node.js 版本（需要 18+）
- 确认所有依赖已正确安装
- 查看构建日志中的错误信息
