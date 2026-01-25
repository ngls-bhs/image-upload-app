# 快速启动指南

## 1. 安装依赖

```bash
npm install
```

## 2. 配置环境变量

创建 `.env.local` 文件：

```env
R2_ACCOUNT_ID=b4e60706d3e02cb2b9bb5758df040e12
R2_BUCKET_NAME=imageupload
R2_ACCESS_KEY_ID=你的R2访问密钥ID
R2_SECRET_ACCESS_KEY=你的R2秘密访问密钥
R2_PUBLIC_URL=https://image-upload.app
NEXT_PUBLIC_GA_MEASUREMENT_ID=你的GA4测量ID（可选）
```

## 3. 运行开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

## 4. 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   ├── page.tsx           # 首页
│   └── layout.tsx         # 根布局
├── components/            # React 组件
│   ├── ui/               # shadcn/ui 组件
│   ├── Header.tsx        # 头部组件
│   ├── UploadArea.tsx    # 上传区域
│   └── ...
├── lib/                  # 工具函数
│   ├── r2.ts            # R2 上传逻辑
│   ├── i18n.ts          # 国际化
│   └── utils.ts         # 工具函数
└── public/              # 静态资源
```

## 主要功能

- ✅ 图片上传（点击/拖拽）
- ✅ 支持 JPG, PNG, WEBP, GIF
- ✅ 自动生成唯一 URL
- ✅ 一键复制 URL
- ✅ 图片预览
- ✅ SEO 优化
- ✅ Google Analytics 集成
- ✅ 响应式设计
- ✅ 动画效果

## 下一步

1. 配置 Cloudflare R2 存储桶
2. 获取 R2 API 凭证
3. 配置 R2 公共访问
4. 部署到 Cloudflare Pages

详细部署说明请参考 [DEPLOYMENT.md](./DEPLOYMENT.md)
