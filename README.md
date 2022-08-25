# Alex Martin's website
This is the website of alex martin. Feature branch

# Deployment
This app is a static site deployed on AWS Amplify. You can use this build context to deploy the app.

``` yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
        - npm run export
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*

```

