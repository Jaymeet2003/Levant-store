const blogsList = [
    {
        id: "blog-1",
        title: "Best Catering Company in Camden | Choosing the Right One"
    },
    {
        id: "blog-2",
        title: "Baby Shower Catering in Lincolnville: Tips for a Perfect Menu"
    },
    {
        id: "blog-3",
        title: "Buffet Catering in Belfast: A Guide to Corporate & Private Events"
    },
    {
        id: "blog-4",
        title: "How to Plan the Ultimate Party with Catering in Rockland"
    },
    {
        id: "blog-5",
        title: "Last-Minute Catering Services in Rockland – What to Know"
    },
    {
        id: "blog-6",
        title: "Why You Should Hire a Professional Caterer for Baby Showers in Rockport"
    },
    {
        id: "blog-7",
        title: "How to Plan a Stress-Free Birthday Party with Catering in Lincolnville"
    },
    {
        id: "blog-8",
        title: "Small Event Catering in Waldoboro: 5 Things to Look For"
    },
    {
        id: "blog-9",
        title: "How to Host an Elegant Cocktail Party with Catering in Rockland"
    }
];

let blogList = $('#blog-list');
const placeholderImage = `assets/img/blog/blog_1_1.jpg`;
const imageBasePath = 'assets/img/blog/'

blogsList.forEach(blog => {
    const imageUrl = blog.image ? `${imageBasePath}${blog.image}` : placeholderImage;
    // Parse the date and format it
    const date = new Date(blog.datePosted);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = !isNaN(date)
        ? date.toLocaleDateString('en-US', options)
        : 'Unknown Date'; // Handle invalid dates gracefully

    blogList.append(`
              <div class="swiper-slide">
                  <div class="blog-card">
                      <div class="blog-img">
                          <img src="${imageUrl}" alt="blog image" style="max-height=250px; width=391px;"/>
                      </div>
                      <div class="blog-content">
                          <div class="blog-meta">
                              <a><i class="far fa-calendar"></i>${formattedDate}</a>
                          </div>
                          <h3 class="box-title">
                              <a href="blog-details.html?id=${blog.id}">${blog.title}</a>
                          </h3>
                          <a href="blog-details.html?id=${blog.id}" class="th-btn btn-sm style4">Read More<i class="fas fa-chevrons-right ms-2"></i></a>
                      </div>
                  </div>
              </div>
            `)
});