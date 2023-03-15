const createFooter = () => {
    let footer = document.querySelector('folder');

    footer.innerHTML =`
    <div class="footer-content">
            <img src="C:/Users/HP/Downloads/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watches</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watches</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">About Company</p>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Dolore et voluptatem assumenda voluptates libero error doloremque culpa ducimus, 
           quisquam eum maiores eaque a dicta ex minus eos molestiae adipisci voluptatibus ratione 
            in ipsa aliquam itaque? Sequi non dolorum harum nisi vel dignissimos iste molestias 
            consequuntur amet quod corporis enim et quis unde ut vero maiores rem accusantium eaque 
            error, alias totam? Molestias id exercitationem accusantium excepturi, laboriosam 
            voluptate similique aliquid eveniet commodi dolorum cupiditate iure in officiis esse 
            earum quaerat dolorem repellat ipsa vero temporibus itaque laudantium deserunt hic. 
            Magnam expedita culpa quis quibusdam possimus illum pariatur ipsum quas. Vitae.</p>
        <p class="info">support emails - help@clothing.com, 
        customersupport@clothing.com</p>
        <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Terms & Conditions</a>
                <a href="#" class="social-link">Privacy Page</a>
            </div>
            <div>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();