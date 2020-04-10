## Overview

This is the code for an [AWS Lambda](https://aws.amazon.com/lambda/) that automatically updates my personal website each time I make a new blog post.

## Details

I have a [blog](https://vaccha.com) whose content is stored in a git repository. I also have a static [personal website](https://thomasfoerster.ca) that is hosted on [S3](https://aws.amazon.com/s3/). When I push a new post to the blog's repository, this Lambda gets triggered. It downloads the repository and gets the name and URL of the most recent blog post. Then it updates the HTML file stored in the S3 bucket with a link to the new blog post.
