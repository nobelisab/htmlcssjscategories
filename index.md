<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <script src="js/script1.js"></script>
    <script src="js/script2.js"></script>
    <script src="js/app.js"></script>
    <script src="js/script.js"></script>
    <script src="js/ajax-utils.js"></script>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Healthy Living Investments UX Website Design</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="../#stylesnew.css">
    <link href='https://fonts.googleapis.com/css?family=Oxygen:400,300,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lora' rel='stylesheet' type='text/css'>

    <script>
      console.log(x);
    </script>
  </head>
<body>

  <header>
    <nav id="header-nav" class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a href="index3.html" class="pull-left visible-md visible-lg">
            <div>
            <img src="../images/logo in circle.png" width="300" height="200" alt="Logo image">        
          </div>
          </a>

          <div class="navbar-brand">
            <a href="https://healthylivinginvestments.com"><h2>Healthy Living Investments UX Web Design</h2></a>
            <div id="logohli.png" alt="Logo image"></div>
            <p>
              <span>Envision It</span>
            </p>
          </div>

          <button id="navbarToggle" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar">Selections</span>
            <span class="icon-bar">Specials</span>
            <span class="icon-bar">Questionnaire</span>
          </button>
        </div>
        
        <div id="collapsable-nav" class="collapse navbar-collapse">
           <ul id="nav-list" class="nav navbar-nav navbar-right">
          
            <li id="navHomeButton" class="visible-xs active">
              <a href="index3.html">
                <span class="glyphicon glyphicon-home"><br></span> Home</a>
            </li>
          
            <li id="navMenuButton">
              <a href="websiteusability.html" onclick="$dc.loadMenuCategories();">
                <span class="glyphicon glyphicon-cutlery">&nbsp;</span><br class="hidden-xs">Website Usability</a>
            </li>
          <!--
            <li id="navInvestment">
              <a href="investmenteducation.html">
                <span class="glyphicon glyphicon-info-sign"></span><br class="hidden-xs">Investment Education</a>
            </li>
          -->
          <li id="navPortfolio">
            <a href="portfolio.html">
              <span class="glyphicon glyphicon-certificate">&nbsp;</span><br class="hidden-xs">Portfolio</a>
          </li>
            <li id="navBrand">
              <a href="brandmarketing.html">
                <span class="glyphicon-home">&nbsp;</span><br class="hidden-xs">Brand Marketing</a>
            </li>
            <li id="navSelect">
              <div class="active">
              <a href="select-categories.html">
                <span class="glyphicon-home">&nbsp;</span><br class="hidden-xs">Selections</a>
            </li>
            <br>
            <li id="phone" class="hidden-xs">
              <a href="tel:904-352-6609">
                <span>904-352-6609</span></a><div></div>
            </li>
          </ul><!-- #nav-list -->
        </div><!-- .collapse .navbar-collapse -->
      </div><!-- .container -->
    </nav><!-- #header-nav -->
  </header>
  <br>
  <div class="container">
  <p>
    Search Site
    <input id="name" type="text">
    <button onclick="sayHello();">
      Find it!
    </button>

    <div class="email">
      <a href="mailto:elisabeth@healthylivinginvestments@gmail.com">
          <span class="hidden-xs"><h5><bold>Send a message!</bold></h5></span></a>
    </div>
    </p>
    </div>
  <!--
  <p>
    Discover More
    <input type="textarea" width="250">
    <button>
      Send a message!
    </button>
  </p>
-->
  </p>
  </div>
   <div id="content"></div>
   <script src="js/script.js"></script>


  <div id="xs-deliver" class="text-center visible-xs">25% off for New Customers</div>

  <div id="main-content" class="container">
  <div class="jumbotron">
  <img src="../images/765pxSeaPhoto.jpeg" alt="Picture of Sea" class="img-responsive visible-xs"></img>  
  </div>

  <div id="home-tiles" class="row">
    <div class="col-md-4 col-sm-6 col-xs-12">
      <a href="select-categories.html">
        <img src="../images/select-tile.jpg" width="250px" height="250px"></img>
        <!--<div id="select-tile">--><span><label>Selections</label></span></div></a>
    </div>
    <div id="home-tiles" class="row">
    <div class="col-md-4 col-sm-6 col-xs-12">
      <a href="single-category.html">
        <img src="../images/specials-tile.jpg" width="250" height="250"></img>
        <!--<div id="specials-tile">--><span><label>Specials</label></span></div></a>
    </div>
    <div id="home-tiles" class="row">
    <div class="col-md-4 col-sm-12 col-xs-12">
      <a href="https://forms.gle/U2ddkCvtKTNKDeSJ7">
        <img src="../images/questionnaire-tile.png" width="250" height="250"></img>
        <!--<div id="questionnaire-tile">--><span><label>Website Questionnaire</label></span></div></a>
    </div>
  </div>

  <script>
    console.log("right before closing tag");
  </script>

</body>

  <footer class="panel-footer"> 
    <div class="container">
      <div class="row">
        <!--
        <section id="hours" class="col-sm-4">
          <span>Hours:</span><br>
          Mon-Thurs: 11:15am - 7:00pm<br>
          Fri: 11:15am - 2:30pm<br>
          Saturday Closed
          <div>
          <hr class="visible-xs">
        </section>
        </div>
        <div class="row">
        <section id="address" class="col-sm-4">
          <div>
          <span>Address:</span><br>
          Arble Drive<br>
          Jacksonville, FL 32211
          </div>
        -->
          <br>
          <p>Schedule a Consultation</p>
          <hr class="visible-xs">
          <div class="email">
            <a href="mailto:elisabeth@healthylivinginvestments@gmail.com">
                <span class="hidden-xs"><h5><bold>Send a message!</bold></h5></span></a>
          </div>
          </p>
          </div>
        </section>
        </div>
        <div class="row">
        <section id="testimonials" class="col-sm-4">
          <p>"Creative website designer"</p>
          <p>"Knowledgable about SEO"</p>
        </section>
      </div>
      <div class="text-center">&copy; Copyright Elisabeth Noble 2022</div>
    </div>
  </footer>

  <!-- jQuery (Bootstrap JS plugins depend on it) -->
  <script src="js/jquery-2.1.4.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/ajax-utils.js"></script>
  <script src="js/script.js"></script>
</body>
</html>

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/nobelisab/htmlcssjscategories/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/nobelisab/htmlcssjscategories/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
