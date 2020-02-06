# eb-cli
Pattern generator for CloudWatch Events / EventBridge

## Installation 
`npm install -g @mhlabs/eb-cli`

## Usage
`eb pattern` - Will prompt you with a wizard that helps you build pattern for event matching. This is using EventBridge's schema registry (currently in preview) to let you navigate the schema you want to react on. 

For AWS events, such as `aws.codepipeline` it's already enabled, but for custom events you will have to enable it in the AWS Management Console.

![Demo](demo.gif)
