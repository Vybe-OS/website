# ==========================================
# STAGE 1: Build Stage
# ==========================================
FROM node:24-alpine AS builder

WORKDIR /app

# Copy package management files
COPY package*.json ./

# Install SEMUA dependensi (termasuk devDependencies untuk build)
RUN npm ci

# Copy semua file proyek
COPY . .

# Build aplikasi SvelteKit
RUN npm run build

# Prune devDependencies (hanya sisakan dependensi produksi)
RUN npm prune --production

# ==========================================
# STAGE 2: Production Stage
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /app

# Copy hasil build dan node_modules yang sudah di-prune dari stage builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port standar SvelteKit Node adapter (3000)
EXPOSE 3000

# Environment variables bawaan SvelteKit
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Jalankan aplikasi hasil build
CMD ["node", "build"]
