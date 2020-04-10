const { blogUrl } = require('../config');

const formatDate = date => date.toISOString().slice(0, 10);

const createHTMLFromMetadata = ({ title, fileName }) => {
  const today = new Date();
  const postUrl = `${blogUrl}/${fileName.slice(0, -3)}/` // remove the ".md" extension

  return `
<!DOCTYPE html>
<html lang="en-us">

<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-135790131-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-135790131-1');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thomas Foerster</title>
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>
            Thomas Foerster
        </h1>
    </header>
    <main>
        <section class="links">
            <div class="container">
                <ul>
                    <li><a href="https://github.com/tf3">GitHub <span>github.com/tf3</span></a></li>
                    <li><a href="mailto:thomas.f@myplanet.com">Email <span>thomas.f@myplanet.com</span></a></li>
                    <li><a href="https://linkedin.com/in/tf3">LinkedIn <span>linkedin.com/in/tf3</span></a></li>
                    <li><a href="https://vaccha.com">Blog <span>vaccha.com</span></a></li>
                </ul>
            </div>
        </section>

        <section class="about">
            <div class="container">
                <p>I am a software developer at <a href="https://myplanet.com/">Myplanet</a>.</p>
                <p>In 2019 I received a Ph.D. in philosophy from <a href="https://cornell.edu">Cornell
                    University</a>, where I did <a href="https://philpeople.org/profiles/thomas-foerster">work</a>
                    in philosophy of mind and ethics.</p>
                <p>I blog at <a href="https://vaccha.com">Vacchablogga</a>, mostly about philosophy.</p>
                <aside>
                    <ul>
                        <li>Favourite post: <a href="https://vaccha.com/transitioning-to-tech/">Transitioning to tech: a guide for philosophers</a></li>
                        <li>Newest post: <a href="${postUrl}">${title}</a></li>
                    </ul>
                </aside>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            Updated ${formatDate(today)}
        </div>
    </footer>

</body>

</html>
`;
};

module.exports = createHTMLFromMetadata;
