# Create an empty project with a remote repository

A CLI tool that will create a folder locally for your new project in addition to a private GitHub repository and link them together.

![image](https://github.com/HassanKanj/create-empty-project-with-remote-repo/blob/main/documentation/images/running-the-app.jpg)

![image](https://github.com/HassanKanj/create-empty-project-with-remote-repo/blob/main/documentation/images/git-remote-v.jpg)

Let's say you constantly work on new programming projects, and each time you create a private GitHub repository then create a new directory for your project and then link your local project directory to that GitHub repo.

To avoid doing that each time, I made this open source tool that will handle these steps for you, and with a single command it will:

- Create a private GitHub repository in your account.
- Create a local folder with the project name you specified.
- Git init the newly created folder and link it to the GitHub private repository.

## Usage

**Note**: Before you proceed, make sure that `node` and `npm` are installed on your machine.

1- Clone (or download) this repository: `git clone https://github.com/HassanKanj/create-empty-project-with-remote-repo`

2- go to the project path `cd create-empty-project-with-remote-repo` and run `npm install`

3- Rename the file **env.sample** to **.env**

4- Set this variable in your **.env** file:

- **GITHUB_PERSONAL_ACCESS_TOKEN**: This is your GitHub access token.

To get the access token, first login to GitHub, then follow these steps:

![image](https://github.com/HassanKanj/create-empty-project-with-remote-repo/blob/main/documentation/images/token-1.jpg)

![image](https://github.com/HassanKanj/create-empty-project-with-remote-repo/blob/main/documentation/images/token-2.jpg)

![image](https://github.com/HassanKanj/create-empty-project-with-remote-repo/blob/main/documentation/images/token-3.jpg)

![image](https://github.com/HassanKanj/create-empty-project-with-remote-repo/blob/main/documentation/images/token-4.jpg)

![image](https://github.com/HassanKanj/create-empty-project-with-remote-repo/blob/main/documentation/images/token-5.jpg)

![image](https://github.com/HassanKanj/create-empty-project-with-remote-repo/blob/main/documentation/images/token-6.jpg)

![image](https://github.com/HassanKanj/create-empty-project-with-remote-repo/blob/main/documentation/images/token-7.jpg)

5- next step is to create a new alias to run this tool from any directory, you will have to add the alias to your .bash_profile or .zshrc for example (it depends on the shell and/or the OS you are using), let's say that you downloaded/cloned the project to this path: `/path/to/the/tool/create-empty-project-with-remote-repo`, then add this alias to the file:

```bash
alias create-empty-project-with-remote-repo="node /path/to/the/tool/create-empty-project-with-remote-repo/index.js"
```

In this way, you will have an new 'command' called `create-empty-project-with-remote-repo` that you can run from any folder.

6- now whenever you want to use this tool, you simply go to any folder using your terminal, and then run this command in order to create a new project folder there, and to link that folder to a private GitHub repository that will be created for you as well:

```bash
create-empty-project-with-remote-repo --name="place-your-project-name-here" --description="place the project description here (this will appear in the repo descripiton)"
```

and here's an example:

![image](https://github.com/HassanKanj/create-empty-project-with-remote-repo/blob/main/documentation/images/running-the-app.jpg)


## About the author

My name is Hassan Kanj, I am an independent programmer (Freelancer), a maker, and a 3D printing enthusiast.

In case you want to know more about my skills or if you would like to hire me, feel free to check my website for more details: https://www.hassankanj.com.

And here's my LinkedIn profile as well: https://www.linkedin.com/in/hassankanj

## License

MIT License

Copyright (c) 2020 Hassan Kanj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
