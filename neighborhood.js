class Restaurant {
    constructor (name, imgURL, descriptions, link){
        this.name = name;
        this.imgURL = imgURL;
        this.descriptions = [...descriptions];
        this.link = link;
        this.generateHTML = this.generateHTML;
    }

    generateHTML(){

        let html = `<h2>${this.name}</h2>
                    <img src=${this.imgURL} />
                    <ul>`;

                    for (let i=0; i < this.descriptions.length; i++){
                        html = `${html}<li>${this.descriptions[i]}</li>`;
                    }

                    html = `</ul>
                            ${html}<span><a href=${this.link}>Visit Their Website!</a></span>`;

        return html;

    }
}

class RestaurantContainer {
    constructor (restaurants) {
        this.restaurants = [...restaurants]
        this.grabBag = [...restaurants]
    }

    generateRestaurant(){
        let reset = '';
        const pullIndex = Math.floor(Math.random() * this.grabBag.length);
        const pullItem = this.grabBag.splice(pullIndex, 1)[0];

        if (this.grabBag.length === 0) {
            this.refillGrabBag(pullItem)
        }

        return pullItem;
    }

    refillGrabBag(removeItem){
        this.grabBag = [...this.restaurants];
        this.grabBag.splice(
        this.grabBag.indexOf(removeItem), 1)
    }

}

function loadRestaurant(event) {
    const target = document.querySelector('#restaurant-target');
    target.innerHTML = restaurantGenerator.generateRestaurant().generateHTML();
}

const restaurantButton = document.querySelector('#restaurant-display>button');
restaurantButton.addEventListener('click', loadRestaurant);

const restaurantArray = [
new Restaurant("McDonald's", "https://cdn.usarestaurants.info/assets/uploads/d7e0fc878dbec83d3056cbf3c46aae33_-united-states-michigan-wayne-county-wyandotte-mcdonalds-734-281-1105htm.jpg", ["It's a McDonald's...", "The staff is nice, but woth Covid the drive-thru line is long and the lobby is closed."], "https://www.facebook.com/McDonalds3421BiddleAve/"),

new Restaurant("Sportsmans Pizzeria", "https://images1-citysearch-net.akamaized.net/assets/imgdb2/reinvent/profile/2012/7/27/16/JJtjCPkI_620x465.jpg", ["Serving up some of the best Pizza's in the area, Sportsman's Pizzaria offers delivery or carry-out service, as you would expect. What is unexpected is the friendly atmosphere in the place. The owner, Todd Heissenbuttel, has been making pizza's since his high school days at Roosevelt (more years ago than he is willing to admit) and still loves serving up a friendly converstation along with your pizza! He can often been seen manning the counter, bringing a smile to the faces of everyone who comes in. If Todd isn't there in person, his well trained staff will to a fantastic job taking care of your order as he would.", "All the items are delicious! Make mine with Bacon and Onions!", "Recently Awarded MetroTimes 'Best Pizza in Metro Detroit'"], "https://sportsmanspizzeria.net/"),

new Restaurant("Magdaleno Ristorante", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/bc/ec/2a/magdaleno-italian-restaurant.jpg?w=800&h=-1&s=1", ["I loved this place. The food was delicious and I love that they offer gluten free options for over half the menu ! Being gluten and dairy free you don't find a lot of options downriver but this place was great and accommodated my needs. The service was great as well!", "Great food, drinks, service and atmosphere!", "Gluten free bread and dipping sauce brought fresh to the table.", "This is a real Italian restaurant. I love to be able to take my wife who has celiac disease here. Most meals here can be made gluten free. Love there food."], "https://magdalenoitalian.com/"),

new Restaurant("Jee's Top5 Thai Food", "https://cdn.usarestaurants.info/assets/uploads/50d6d19d266f11e7b240fd5cce7a4663_-united-states-michigan-wayne-county-wyandotte-jees-top5-thai-food-734-285-2333htm.jpg", ["I'm in love with this little place . One thing I love about small family owned businesses is that The customer service is outstanding. They go above and beyond to meet all your needs. It's always a smile and friendly attitude that greets you rather its in person or over the phone when placing an order... and that speaks volume these days. The food is always fresh and favorable.. this place is FANTASTIC I recommend everyone to stop by and try anything on the menu ..... YOU WONT BE DISAPPOINTED", "Simply amazing! All the food is cooked fresh when you order and is hands down the best Thai food I have ever eaten. The flavors are amazing and the generous portions will satisfy your hunger. You need to try this place! Your tongue will thank you!", "Best Thai I've had in years, spring rolls are large and dipping sauce awesome, pad Thai was delicious"], "http://www.jeestop5thaifood.com/"),

new Restaurant("R.P. McMurphy's", "https://scontent.fdet1-1.fna.fbcdn.net/v/t1.6435-9/242284680_4188938811155754_29265690664121066_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Q8aN2kk4spMAX_ApVSi&_nc_ht=scontent.fdet1-1.fna&oh=56b67b08cbe79e213999808ad70a651c&oe=61A4D357", ["I it was exactly how I was told it would be. Good food and beer as well as even with me being from Ohio people were very friendly other customers and staff and talked to me so that was really nice. I enjoyed this place.", "They offer a variety of hearty dishes and great seafood as well.", "Great drinks and menu offerings, fantastic staff and service!"], "http://www.rpmcmurphys.com/"),

new Restaurant("Portofino Restaurant & Banquet", "https://cdn.usarestaurants.info/assets/uploads/a053f51041499ea907efc14a7db9f55a_-united-states-michigan-wayne-county-wyandotte-portofino-restaurant-banquet-734-281-6700htm.jpg", ["Love the view while you eat just adds to the experience. Nice view of the water. The portions were big. I had the pasta with the sirloin tips and sausage. I was impressed with how soft the tips were. Not overcooked like I have tasted at other places. All the food that the other had at our table was great on taste and quality too.", "The ambience was lovely. Nice view of Detroit river. Delicious food. And awesome drinks. It was a nice Sweetest Day dinner for us.", "Waterfront restaurant, great menu, great selection of beer, wine, and cocktails."],"https://www.portofinoontheriver.com/"),

new Restaurant("The Vault", "https://www.gannett-cdn.com/presto/2021/04/16/PDTF/87d57ee5-edff-4891-8540-4ef7ef5f3ac5-thumbnail_IMG_3941.jpeg?width=300&height=400&fit=crop&format=pjpg&auto=webp", ["I was eager to come to The Vault ever since I saw it opened. It was able to make reservations a few days before. Walking in I was pretty surprised at how open the restaurant was, the restaurant is pretty, modern and goth with elegance? They had a bar on the side too that was open to the outside. Lots of servers walking around waiting on tables, it was very busy. Our server was a really nice gentleman he was educated with the menu. The food was very good, a little bit expensive but you can tell they make the food with high quality ingredients. I ended up ordering the Wagyu burger which was really good the meat tasted very fresh. Highly recommend this restaurant if you're considering going, highly recommend making reservations as well especially for a Friday or weekend.", "This is a great addition to the fine dining choices of downriver! We had the loaded chicken pasta and the perch, which was on special. Both dishes were outstanding. We chose the poached pear salad to go with it and were so happy that we did. We sat outside and had a lovely time. Highly recommend!", "Visited for dinner on a Friday. The one glitch was that they did not seem to have our reservation, but still seated us right away. Our server was extremely knowledgeable, friendly and professional. Wonderful cocktail selection, and the menu! It was really hard to make a decision. Between the three of us we tried the sole, the prawns, and the halibut. Everything was absolutely wonderful. The salads, the sides, the atmosphere. We had a wonderful time and will return!"],"https://www.thevaultonfirst.com/")]
    

const restaurantGenerator = new RestaurantContainer(restaurantArray);