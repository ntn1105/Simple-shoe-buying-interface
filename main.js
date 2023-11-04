img_source=['./img_shoes/nike-epic-react-flyknit-pear-pink-release-info-1 (1).png',
'./img_shoes/nike_black.png',
'./img_shoes/First Look At The Nike Epic React Flyknit 2.png',
'./img_shoes/Nike Revives The OG Multi-Color Flyknit With The Epic React.png',
'./img_shoes/nike_epic_react_flykinit_restocks.png',
'./img_shoes/nike-epic-react-nikeid-tokyo.png',
'./img_shoes/The Nike Epic React Flyknit Is Coming Soon In Two New Colorways.png',
'./img_shoes/nike-epic-react-flyknit-volt-glow-release-info-1.png'
]
const product_name = ['Nike Epic React Flyknit',
'The Nike Epic React Flyknit BETRUE ',
'First Look At The Nike Epic React Flyknit 2',
'Nike Revives The OG Multi-Color Flyknit With The Epic React',
'Nike Epic React Flyknit Restocks',
'The Nike Epic React Flyknit 2',
'The Nike Epic React Flyknit Is Coming Soon In Two New Colorways',
'Nike Epic React Flyknit “Volt Glow” Pack '];
const product_price = ['$150','$200','$180','$350','$150','$229','$199','$299' ];
const product_description = ['Nike’s newest running innovation – the Epic React Flyknit – is ready to be rolled out in two brand new “Pearl Pink” iterations one for the men and one for the women. Sporting a nearly identical makeup, the pair for the men comes with a slightly darker hue, while the women’s offering boasts a softer rendition of pink. Each offering’s foam midsole provides the wearer with an unmatched amount of energy return that offers up one of the smoothest rides on the market. Fans of this tonally colorful new look with a slight gradient will be able to pick up a pair from Nike retailers on April 19th with an MSRP of $150 USD.',
'Inspired by the iconic 1978 Pride flag, Nike’s Epic React Flyknit set to release as part of its upcoming BETRUE collection utilizes a gradient rainbow outsole. BETRUE can be seen in bold Nike typeface on its heel loops and sockliner, while the majority of its upper comes dressed in a stately black. Another design element of note is a shining pink triangle featured on the heel that is representative of one of the most complex symbols in the LGBTQ community. Enjoy an official set of images for this upcoming Epic React below and be sure to log onto Nike.com when this pair kicks off the Swoosh Brand’s 2018 BETRUE collection on June 6th.',
'The Nike Epic React Flyknit was one of the most popular running shoes of 2018, lauded both for its performance and style. After a successful first year on the market for the silhouette, the Epic React Flyknit 2 is set to carry the torch for the line in 2019 — and it was debuted by none other than LeBron James recently, who rocked a “Pixel” colorway to a game against the Hornets this past weekend.',
'\'The Nike Epic React, a precursor to later innovative models, maintains the brand\'s sleek design and comfort-focused approach. Drawing inspiration from the vibrant Flyknit Racer, the 2018 Epic React incorporates similar elements, balanced by black accents for a more subdued look. Anticipated to release on December 12th,these nostalgic Epic Reacts embody Nike\'s enduring design philosophy.',
'Nike’s next foray into foam-cushioned performance runners begins tomorrow with the Epic React. Available in two colorways for both men and women, the Nike Epic React features the brand’s latest cushion platform – a highly engineered foam that minimizes energy loss. The pattern on the sole is based on heat-map data, while the toe and heel features a rubber layer to prevent wear. The rest of the REACT foam is actually fully exposed, but the composition of the foam prevents severe wear and flattening. You can buy the Nike Epic React tomorrow on Nike.com and select retailers.',
'The Nike Epic React Flyknit,  a futuristic shoe widely lauded for its lightweight comfort/performance and unique style has a new twist: it’s now fully customizable on NIKEiD. Apart from the usual swath of unique color and branding options that iD offers, there’s also a unique twist to the iD process courtesy of five “run clubs” from around the world selected by Nike.',
'Nike\'s latest running shoe, the Epic React Flyknit, comes in two colorways for men and women. The women\'s version features a bright crimson with a black heel cage, while the men\'s version has a toned-down grey with a pink heel cage. Both shoes have a gradient Flyknit upper, a lightweight white React midsole with colored accents, and a 3M detail on the heel tab for visibility. Expect them to drop soon on Nike.com for $150 USD.',
'Nike\'s Epic React Flyknit returns in a new "Volt Glow" pack, featuring two colorways, one for men and one for women. The pack focuses on shades of blue with a vibrant Volt Glow element on the heel, contrasting with stark white accents. These sneakers, often compared to adidas Ultra BOOST, showcase Nike\'s advanced knit technology and offer impressive energy return. Both models will be released on May 10th for $150 USD at Nike retailers and Nike.com.'
]
const Selection_product = document.querySelectorAll('.product_selection button');
const product_info = document.querySelectorAll('.product_info p');
const product_buy=document.querySelector('.Buy')
let Image_product=document.querySelector('.product_main img');

for(let i=0; i<Selection_product.length; i++){
    Selection_product[i].addEventListener('click',function(){
        Image_product.src=img_source[i];
        Image_product.style.opacity = '0';
        setTimeout(function () {
                 
            Image_product.style.opacity = '1'; 
        }, 100);

        Selection_product[i].style.backgroundColor = 'rgb(248, 127, 147)'; 
        Selection_product[i].style.color = ' white';
        product_info[1].innerText=product_name[i];
        product_info[2].innerText=product_price[i];
        product_info[3].innerText=product_description[i];
       
        for (let j = 0; j < Selection_product.length; j++) {
            if (j !== i) {
                Selection_product[j].style.backgroundColor = 'initial'; 
                Selection_product[j].style.color = 'black'; 
               
              
            }
        }
      
    });}
    let isSelectionProductClicked=false;
    product_buy.addEventListener('click', function (e) {
        product_buy.style.backgroundColor = 'transparent';
        product_buy.style.color = 'green';
        product_buy.style.borderRadius = '2px';
        product_buy.style.border = '2px solid green';
        product_buy.innerText = 'Successful';
        isSelectionProductClicked = true;
    });
    
    document.addEventListener('click', function (e) {
        if (isSelectionProductClicked && e.target !== product_buy) {
            product_buy.style.backgroundColor = '';
            product_buy.style.color = '';
            product_buy.style.borderRadius = '';
            product_buy.style.border = '';
            product_buy.innerText = 'ADD TO CART';
            isSelectionProductClicked=false;
        }
    });
    