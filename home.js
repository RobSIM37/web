console.log("hello world");

class DuckComplimentGenerator{ // or the hot new industry acronym... DCG
	constructor(ducks, duckNames, compliments){
		this.listStorage = {
			"duck": [...ducks],
			"duckNames": [...duckNames],
			"compliment": [...compliments]
		}

		this.grabBagStorage = {
			"duck": [...ducks],
			"compliment": [...compliments]
		}

		this.generateRandomItem = this.generateRandomItem;
		this.resetList = this.resetList;

	}

	generateRandomItem(type) {

		let result = '';
		const pullIndex = Math.floor(Math.random() * this.grabBagStorage[type].length);
		const pullItem = this.grabBagStorage[type].splice(pullIndex, 1)[0];
		
		if (this.grabBagStorage[type].length === 0) {
			this.resetList(type, pullItem);
		}
		
		switch (type) {
			case 'duck':
				result = pullItem;
				break;

			case 'compliment':
				const currentImage = document.querySelector('img').src;
				const duckNameIndex = this.listStorage.duck.indexOf(currentImage);
				const duckName = this.listStorage.duckNames[duckNameIndex];

				result = `${duckName} says: ${pullItem}`;
				break;
		}

		return result;
	}

	resetList(type, removeItem) {

		this.grabBagStorage[type] = [...this.listStorage[type]] // reset the grabBag
		this.grabBagStorage[type].splice(this.grabBagStorage[type].indexOf(removeItem), 1) // remove the item that was selected to avoid a bag to bag repeat
		
	}
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted succesfully');
}

function generateCompliment(event) {

	let complimentAlert = quackEmUp.generateRandomItem('compliment');
	let duckImage = quackEmUp.generateRandomItem('duck');

	alert(complimentAlert);
	setDuckImage(duckImage);
	
}

function setDuckImage(image) {
	
	let duckElement = document.querySelector('img');
	duckElement.src = image;

}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('#rubber-ducky');

image.addEventListener('mouseover', generateCompliment);

const quackEmUp = new DuckComplimentGenerator(
	
	['https://cdn11.bigcommerce.com/s-91br/images/stencil/660x660/products/1742/21757/IMG_5491__31051.1589004052.jpg?c=2',
	'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/500x659/products/246/9133/Computer-Geek-Rubber-Duck-Schanables-3__49617.1576268535.jpg?c=2',
	'https://cdn.shopify.com/s/files/1/0604/4801/products/Elvis_1-min-min_540x.jpg?v=1534974546',
	'https://images.squarespace-cdn.com/content/v1/53208ff6e4b00fbb0f1c2d65/1550436940038-A66AJN20BMAXHQWU1RFV/IMG_0336.JPG?format=500w',
	'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/500x659/products/261/10460/Wedding-Set-Rubber-Duck-Ad-Line-3__62602.1634666040.jpg?c=2',
	'https://schylling.com/wp-content/uploads/2020/08/RDKY-Classic-Yellow-Rubber-Duck_web.jpg',
	'https://cdn.shopify.com/s/files/1/0012/4482/3632/products/duck_2000x.jpg?v=1583533109',
	'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/500x659/products/501/10539/blue-Rubber-Duck-ad-line-3__84014.1612788977.jpg?c=2',
	'https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw7c56cf17/productimages/main/799554C01_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5',
	'https://cdn.shopify.com/s/files/1/2476/0976/products/voro-rubber-ducky-02_5000x.jpg?v=1631922741',
	'https://cdn.shoplightspeed.com/shops/605879/files/29450540/1024x1024x2/schylling-associates-cowboy-rubber-duck.jpg',
	'https://cdn11.bigcommerce.com/s-s0bffw770m/images/stencil/640w/products/13374/17491/22975__23078__63826.1581948914.jpg?c=2'],
	['Statue of Liberty Duck', 'Computer Nerd Duck', 'Elvis Duck', 'Batduck', 'Tuxedo Duck', 'Classic Rubber Duck', 'Cool Duck', 'Blue Duck',
	'Chrome Duck', 'Helicopter Duck', 'Cowboy Duck', 'Einstien Duck'],
	[`You look great today.`,
	`I bet you make babies smile.`,
	`You have impeccable manners.`,
	`I like your style.`,
	`You have the best laugh.`,
	`I appreciate you.`,
	`You are the most perfect you there is.`,
	`Our system of inside jokes is so advanced that only you and I get it. And I like that.`,
	`You're strong.`,
	`Your perspective is refreshing.`,
	`You're an awesome friend.`,
	`You light up the room.`,
	`You deserve a hug right now.`,
	`You should be proud of yourself.`,
	`You're more helpful than you realize.`,
	`You have a great sense of humor.`,
	`You've got all the right moves!`,
	`Your kindness is a balm to all who encounter it.`,
	`On a scale from 1 to 10, you're an 11.`,
	`You are brave.`,
	`You're even more beautiful on the inside than you are on the outside.`,
	`You have the courage of your convictions.`,
	`Aside from food. You're my favorite.`,
	`If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.`,
	`You are making a difference.`,
	`You're like sunshine on a rainy day.`,
	`You bring out the best in other people.`,
	`Your ability to recall random factoids at just the right time is impressive.`,
	`You're a great listener.`,
	`How is it that you always look great, even in sweatpants?`,
	`Everything would be better if more people were like you!`,
	`I bet you sweat glitter.`,
	`You were cool way before hipsters were cool.`,
	`That color is perfect on you.`,
	`Hanging out with you is always a blast.`,
	`You always know, and say, exactly what I need to hear when I need to hear it.`,
	`You smell really good.`,
	`You may dance like no one's watching, but everyone's watching because you're an amazing dancer!`,
	`Being around you makes everything better!`,
	`When you're not afraid to be yourself is when you're most incredible.`,
	`Colors seem brighter when you're around.`,
	`You're more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)`,
	`That thing you don't like about yourself is what makes you so interesting.`,
	`You're wonderful.`,
	`Jokes are funnier when you tell them.`,
	`Your bellybutton is kind of adorable.`,
	`Your hair looks stunning.`,
	`You're one of a kind!`,
	`You're inspiring.`,
	`You should be thanked more often. So thank you!!`,
	`Our community is better because you're in it.`,
	`Someone is getting through something hard right now because you've got their back.`,
	`You have the best ideas.`,
	`You always know how to find that silver lining.`,
	`Everyone gets knocked down sometimes, but you always get back up and keep going.`,
	`You're a candle in the darkness.`,
	`You're a great example to others.`,
	`Being around you is like being on a happy little vacation.`,
	`You always know just what to say.`,
	`You're always learning new things and trying to better yourself, which is awesome.`,
	`If someone based an Internet meme on you, it would have impeccable grammar.`,
	`You could survive a Zombie apocalypse.`,
	`You're more fun than bubble wrap.`,
	`When you make a mistake, you fix it.`,
	`Who raised you? They deserve a medal for a job well done.`,
	`You're great at figuring stuff out.`,
	`Your voice is magnificent.`,
	`The people you love are lucky to have you in their lives.`,
	`You're like a breath of fresh air.`,
	`You're gorgeous and that's the least interesting thing about you, too.`,
	`You're so thoughtful.`,
	`Your creative potential seems limitless.`,
	`You're the coolest person I know. And I consider myself bet friends with like all celebrities, so. . . .`,
	`You're irresistible when you blush.`,
	`Actions speak louder than words, and yours tell an incredible story.`,
	`Somehow you make time stop and fly at the same time.`,
	`When you make up your mind about something, nothing stands in your way.`,
	`You seem to really know who you are.`,
	`Any team would be lucky to have you on it.`,
	`I bet you do the crossword puzzle in ink.`,
	`Babies and small animals probably love you.`,
	`If you were a scented candle they'd call it Perfectly Imperfect (and it would smell like summer).`,
	`There's ordinary, and then there's you.`,
	`You're someone's reason to smile.`,
	`You're even better than a unicorn, because you're real.`,
	`How do you keep being so funny and making everyone laugh?`,
	`You have a good head on your shoulders.`,
	`Has anyone ever told you that you have great posture?`,
	`The way you treasure your loved ones is incredible.`,
	`You're really something special.`,
	`You're a gift to those around you.`] // Copied from 'https://thinkkindness.org/all-things-kindness/a-list-of-100-compliments/' and formatted using Excel

)

setDuckImage(quackEmUp.generateRandomItem('duck'));