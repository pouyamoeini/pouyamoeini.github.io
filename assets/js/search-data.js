// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "I publish under the name Seyed AmirPouya Moeini.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Supervisions at the University of Cambridge and teaching assistantships at Sharif University of Technology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-preprint-on-arxiv-dual-domain-exponent-of-maximum-mutual-information-decoding-itw-2025",
          title: 'New preprint on arXiv: Dual-Domain Exponent of Maximum Mutual Information Decoding (ITW 2025)....',
          description: "",
          section: "News",},{id: "news-new-preprint-on-arxiv-class-based-expurgation-attains-csiszár-s-expurgated-source-channel-exponent-itw-2025",
          title: 'New preprint on arXiv: Class-Based Expurgation Attains Csiszár’s Expurgated Source-Channel Exponent (ITW 2025)....',
          description: "",
          section: "News",},{id: "news-visited-dr-marco-dalai-at-the-university-of-brescia-brescia-italy",
          title: 'Visited Dr. Marco Dalai at the University of Brescia, Brescia, Italy.',
          description: "",
          section: "News",},{id: "news-visited-dr-jonathan-scarlett-at-the-national-university-of-singapore-singapore",
          title: 'Visited Dr. Jonathan Scarlett at the National University of Singapore, Singapore.',
          description: "",
          section: "News",},{id: "news-two-papers-on-joint-source-channel-coding-are-on-arxiv-two-class-joint-source-channel-coding-izs-2026-and-random-gilbert-varshamov-codes-for-joint-source-channel-coding-isit-2026",
          title: 'Two papers on joint source-channel coding are on arXiv: Two-Class Joint Source-Channel Coding...',
          description: "",
          section: "News",},{id: "news-new-preprint-with-marco-dalai-and-albert-guillén-i-fàbregas-the-expurgated-error-exponent-is-not-universally-achievable",
          title: 'New preprint with Marco Dalai and Albert Guillén i Fàbregas: The Expurgated Error...',
          description: "",
          section: "News",},{id: "news-visited-dr-marco-dalai-at-the-university-of-brescia-brescia-italy",
          title: 'Visited Dr. Marco Dalai at the University of Brescia, Brescia, Italy.',
          description: "",
          section: "News",},{id: "news-visited-the-department-of-signal-theory-and-communications-at-universitat-politècnica-de-catalunya-upc-barcelona-spain",
          title: 'Visited the Department of Signal Theory and Communications at Universitat Politècnica de Catalunya...',
          description: "",
          section: "News",},{id: "news-two-new-preprints-on-arxiv-an-upper-bound-to-the-undetected-error-exponent-with-erasure-decoding-at-positive-rates-and-universal-decoding-for-unequal-error-protection",
          title: 'Two new preprints on arXiv: An Upper Bound to the Undetected Error Exponent...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
