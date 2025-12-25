# Stage 1: Build
# FROM node:22-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve
# FROM nginx:alpine
# COPY --from=builder /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

#--------------------------------------------------------------------

# Stage 1: Build
# FROM node:22-bullseye AS builder
# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # Stage 2: Serve
# FROM nginx:alpine
# COPY --from=builder /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

#--------------------------------------------------------------------

# Stage 1: Build
# FROM node:22-bullseye AS builder
# WORKDIR /app

# ENV ROLLUP_SKIP_NATIVE=1

# COPY package.json package-lock.json ./
# RUN npm install --include=optional

# COPY . .
# RUN npm run build

# # Stage 2: Serve
# FROM nginx:alpine
# COPY --from=builder /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

#original
#--------------------------------------------------------------------


FROM node:22-bullseye AS builder
WORKDIR /app

# 1. Copy ONLY package.json
COPY package.json ./

# 2. Install from scratch (this generates a Linux-specific tree in memory)
RUN npm install

# 3. Copy everything EXCEPT the lockfile
# We use a trick here: copy everything, then we ensure 
# the .dockerignore blocks the host's lockfile
COPY . .

# 4. Remove any accidental lockfile copy just to be 100% safe
RUN rm -f package-lock.json

RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]