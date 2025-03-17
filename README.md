这是一个fork项目, fork自 https://github.com/aerugo/simplegantt

# 简单甘特图
这个项目在浏览器中运行, 需要浏览器支持HTML5和JavaScript, 需要从CDN下载第三方库.

## 功能
- 可交互甘特图
- 任务可按依赖建立
- 可跟踪里程碑
- 离线使用
- 不需要云存储或在线服务

## 功能
- **添加任务** 新建一个任务, 填写任务相关条目后在甘特图中中建立一条任务.
- **里程碑** 新建一个标记, 填写里程碑相关条目后在特定日期建立一条标记.
- **标签管理** 新建一条标签, 填写标签名后在项目中拥有该标签.
- **人员管理** 添加项目人员, 填写人员名称后在项目中加入该人员.
- **项目新建、加载与保存** 项目保存在.yaml文件, 可保存在本地, 或由项目解析后打开.


# SimpleGantt

SimpleGantt is a lightweight project management tool designed for environments where software installation is restricted and cloud web applications are not permitted. It runs entirely in the browser.


# Requirements
SimpleGantt requires a modern web browser with support for HTML5 and JavaScript. It has been tested on the latest versions of Chrome, Firefox, and Edge. It also depends on a number of third-party libraries which are pulled in via CDN. See the `simplegantt.html` file for the list of dependencies.

## Features
- Interactive Gantt chart rendering
- Task management with dependencies
- Milestone tracking
- Offline usage without installation
- No reliance on external web services (except CDNs for libraries) or cloud storage. Once I am happy with how it works, I will bundle the libraries too.

## Getting Started
Simply open the `simplegantt.html` file in your web browser to start using SimpleGantt. No servers or installation required.
Project files are saved locally in .yaml format.

## Usage
- **Creating Tasks**: Add new tasks with start dates, durations, and dependencies.
- **Editing Tasks**: Modify task details and adjust timelines via drag-and-drop. Hold 'Shift' to enable changing task duration in the Gantt chart.
- **Milestones**: Mark key events using milestones.
- **Saving Projects**: Save your project data locally to avoid data loss.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.