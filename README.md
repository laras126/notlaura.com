#notlaura.com redo

##TODOS:
So, I had started completely rewriting all of this and decided that's ridiculous. It's not so bad it needs a rewrite! However, I know more now, so here are some updates that would be great:

###Misc code stuff:
* Remove Font Awesome and use SVG sprites instead
* Remove Animate CSS and use Velocity JS
* Remove IDs and reevaluate class name semantics
* Gallery styles, remove dependency on plugin
* Move Gruntfile to theme root instead of in library/
* 

###Structural:
* Add some helpers for formatting blog posts more interestingly
* Make the homepage more awesome with animations
* Get static content out of page-about.php
* Make portfolio into a more case-study format and possibly one page instead of an archive into single pages


##Old notes:

Welcome to the redesign of my personal site, [notlaura.com](http://notlaura.com) (even though I still like how it looks). Might as well hop on this [designing in the open](http://bradfrostweb.com/blog/post/designing-in-the-open/) bandwagon!

The following is largely inspired by [Destroy Today on Github](https://github.com/destroytoday/destroytoday.com#rules). That guy, [Jonnie Hallman](http://destroytoday.com), put his personal site up here and kept a nice list of rules for whenever it is updated. So here are rules/todos/guidelines:

##Overall guides

###Dev
* Sass for styles
* Use jQuery plugins over WP when possible
* Mobile first
* Learn Grunt.js?
* WordPress (From the [Bones starter theme](https://github.com/destroytoday/destroytoday.com)by Eddies Machado, [my fork](https://github.com/laras126/bones))

###Design/UX
* Large and readable typography
* Section out content areas with different colored backgrounds (like at [Happy Cog](http://happycog.com/))
* Consistent color scheme (I think #5386b0, #231f20, #f4f7f9)

###Content
* Personable tone
* Concise
* A few cute illustrations

###Process
* First static HTML mockups, maybe move to PHP includes
* Transform into WP theme based on [Bones](http://themble.com/bone)

---

##Site map
* _Focus on maintaining individual brand and clearly explaining services. Very personable._
* Home (kind of a long scroll)
	* Catchy copy
	* Summary of services
* About
	* Picture
	* Background/how I got into the web
	* Future goals/Institute of Play
* Services
	* What I do
		* Teaching options
		* Custom sites
		* Sidebar with skillset
	* Who I work with
		* Individuals/Small Biz/Startups
		* Artists, WPF3
		* Whoever?
* Work
	* Maybe only featured projects?
* Blog
	* Keep current content
	* Sidebar with contact info and about me blurb
* Contact
	* No form, just email, Twitter and other stuff
* Footer
	* Contact info
	* About me blurb
	* Maybe recent posts

---

##Some Nitty Gritty

###Plugins/Tools
* [Prism.js](http://prismjs.com/) for syntax highlighting (I think)
* [Toggle nav](codepen.io/bradfrost/pen/sHvaz)

###Sass/Styles
* Keep all colors, fonts, and sizes in variables
* Simple grid with [Susy](susy.oddbird.net)
* 2 break points: tablet and large resolutions
* Vertical rhythm for typography
* Use rems (but find a good solution for fallback)

###Flourishes/Features
* Subtle animate.css stuff for desktops
* Small sidebar on blog
* No comments
* Typekit
* Color consistency

###WordPress
* Keep existing content
* Custom type Projects with taxonomies for Project Category and Skills
* Post formats for link and video
* Plugins: [Cleaner Gallery](http://wordpress.org/plugins/cleaner-gallery/), [WP SEO](http://wordpress.org/plugins/wordpress-seo/)


---

##Inspiration
* [Laura Kalbag](http://laurakalbag.com/)
* [Destroy Today](http://destroytoday.com)
* [Happy Cog](http://happycog.com/)
* [Visual Lexicon by Robin Rendle](http://robinrendle.com/essays/a-visual-lexicon/)
* [Kerem](http://kerem.co/)
* [Brad Frost](bradfrostweb.com)
