// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'da_prod',
      script: 'yarn',
      args: 'run start'
    }
  ],
  deploy: {
    // "prod" is the environment name
    prod: {
      user: 'root',
      key: '~/.ssh/id_rsa',
      host: ['119.28.222.199'],
      ssh_options: 'StrictHostKeyChecking=no',
      // 拉取部署分支
      ref: 'origin/DEPLOY-PROD',
      // 仓库地址
      repo: 'git@github.com:Echo-Lynn/demo-for-automated-deployment.git',
      // 部署 remote 路径
      path: '/data/www/demo-for-automated-deployment',
      'post-deploy': '.  /root/.nvm/nvm.sh && yarn install && pm2 reload ecosystem.config.js'
    },
  }
}
