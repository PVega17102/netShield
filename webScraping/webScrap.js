import axios from 'axios';
import cheerio from 'cheerio';


const newsList = [];

// Function to perform web scraping
const webScrap = async () => {
    try {
        const response = await axios.get('https://www.computerweekly.com/es/recursos/Prevencion-de-amenazas');
        const html = response.data;

        // Load HTML content into Cheerio
        const $ = cheerio.load(html);

        $('.topic-related-content-list li').each((index, element) => {
            const newsItem = {};
            const anchor = $(element).find('a');
            const title = anchor.text().replace("Continúe Leyendo", "");
            const content = $(element).find('p');
            const date = $(element).find('.date');
            const infoType = $(element).find('.infotype');
            const img = anchor.find('img');


            // Extracting text and href from the anchor tag
            newsItem.title = title.trim();
            newsItem.url = anchor.attr('href');
            newsItem.content = content.text().trim();
            newsItem.date = date.text().trim();
            newsItem.infoType = infoType.text().trim();

            if (img.length > 0) {
                newsItem.imageUrl = img.attr('src');
            }
            else {
                newsItem.imageUrl = '';
            }

            newsList.push(newsItem);
        });
    } catch (error) {
        console.error('Error scraping data:', error);
        return ['Error from server'];
    }
};

webScrap();

// Call the function to initiate the scraping process
export default newsList;
