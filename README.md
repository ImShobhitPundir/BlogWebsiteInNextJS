# SP Blog (NextJS)

This is a blog website developed using Next.js and Tailwind CSS. It provides a user-friendly interface with multiple pages including a home page, categories page, and post page. The website utilizes dynamic pages for categories and posts, ensuring real-time updates by using `getServerSideProps` for API calls. This approach avoids the need for static HTML files, allowing for frequent post updates.

## Key Features

1. **Responsive Design:** The website is fully responsive, ensuring optimal viewing experience across different devices. The design is implemented using Tailwind CSS, providing flexibility and ease of customization.

2. **Search Functionality:** The navigation bar includes a search box that allows users to search for posts by title and category. The search feature incorporates debouncing with a delay of 200ms, optimizing the API calls by reducing unnecessary requests. A maximum of 10 search suggestions are provided to enhance user experience.

3. **Infinite Scroll:** The home page utilizes infinite scroll, loading four posts at a time. A shimmer effect is displayed until the posts are fully loaded, creating a smooth and engaging browsing experience. Debouncing is implemented with a 200ms delay to control scrolling behavior efficiently.

4. **Post Read Time:** Each post displays an estimated read time, allowing users to gauge the length of the content before diving in. This feature provides valuable information and helps users manage their time effectively.

5. **Social Media Sharing:** Users can easily share posts on various social media platforms. This functionality encourages content sharing and enables readers to spread the word about interesting articles.

6. **Reading Progress Bar:** The post page features a top green progress bar that indicates the reading progress as users scroll through the content. The progress bar's width increases gradually, reaching 100% when the user reaches the end of the post. This visual cue provides a sense of completion and helps users navigate lengthy articles more effectively.

## Installation and Usage

1. Clone the repository:

   ```shell
   git clone https://github.com/ImShobhitPundir/BlogWebsiteInNextJS.git
2. Navigate to the project directory:

   ```shell
   cd your-repository
3. Install the dependencies:

   ```shell
   npm install
4. Run the development server:

   ```shell
   npm run dev
5. Access the website in your browser at http://localhost:3000.

### Demo
Click here to see a live [Demo](https://spblog.vercel.app/) of the website.

![Demo](https://spundir.in/images/spblog.png)

### Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

### License
This project is licensed under the MIT License. Feel free to use and modify the code according to your needs.

### Acknowledgments
I would like to express my gratitude to the open-source community for their valuable contributions and the developers of Next.js and Tailwind CSS for providing powerful tools to build modern web applications.

### Contact
If you have any questions, please feel free to contact me at er.shobhitpundir@gmail.com. I appreciate your interest and support!

Happy blogging!
