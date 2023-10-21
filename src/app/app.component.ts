import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	widthImage = 10;
	name = 'Alex';
	age = 22;
	img = 'https://source.unsplash.com/random';
	btnDisabled = true;
	register = {
		name: '',
		email: '',
		password: '',
	};
	person = {
		name: 'Alex',
		age: 18,
		avatar: 'https://source.unsplash.com/random',
	};
	scrollPosition = 0;

	names: string[] = ['Alex', 'Max', 'John', 'Jane'];
	newName = '';
	box = {
		width: 100,
		height: 100,
		background: 'red',
	};

	products: Product[] = [
		{
			name: 'EL mejor juguete',
			price: 565,
			image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/toy.jpg',
			category: 'All',
		},
		{
			name: 'Bicicleta casi nueva',
			price: 356,
			image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/bike.jpg',
		},
		{
			name: 'Colleción de albumnes',
			price: 34,
			image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/album.jpg',
		},
		{
			name: 'Mis libros',
			price: 23,
			image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/books.jpg',
		},
		{
			name: 'Casa para perro',
			price: 34,
			image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/house.jpg',
		},
		{
			name: 'Gafas',
			price: 3434,
			image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/glasses.jpg',
		},
	];

	toggleButton() {
		this.btnDisabled = !this.btnDisabled;
	}

	increaseAge() {
		this.person.age++;
	}

	onScroll(event: Event) {
		const element = event.target as HTMLElement;
		this.scrollPosition = element.scrollTop;
	}

	changeName(event: Event) {
		const element = event.target as HTMLInputElement;
		this.person.name = element.value;
	}

	addName() {
		this.names.push(this.newName);
		this.newName = '';
	}

	deleteName(index: number) {
		this.names.splice(index, 1);
	}

	onRegister(){
		console.log(this.register);
	}
}
