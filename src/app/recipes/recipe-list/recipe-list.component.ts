import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Cheesy Lasagna', 'Heat oven to 350°F.  Brown meat in large skillet on medium-high heat. Meanwhile, mix 1-1/4 cups mozzarella, ricotta, 1/4 cup Parmesan, parsley and egg until blended.  Drain meat; return to skillet. Stir in pasta sauce. Pour water into empty sauce jar; cover and shake well. Add to skillet; stir until blended.  Spread 1 cup meat sauce onto bottom of 13x9-inch baking dish; top with layers of 3 lasagna noodles, 1/3 of the ricotta mixture and 1 cup meat sauce. Repeat layers twice. Top with remaining noodles and meat sauce. Sprinkle with remaining mozzarella and Parmesan. Cover with foil sprayed with cooking spray.  Bake 1 hour or until heated through, uncovering after 45 min. Let stand 15 min. before cutting to serve.', 'http://assets.kraftfoods.com/recipe_images/opendeploy/88326-e5ff7f4500adac20f21c3beec343a2fa1016ac79_642x428.jpg'),
  new Recipe('Toasty Pesto Gnocchi', 'Whether you call them nyo-kee, nyock-ee, or something else entirely, these potato dumplings are delicious, for sure. How could they not be with a good dollop of pesto to coat them in cheesy, herbaceous flavor? But just to make sure that you’re not left wanting for more Italian-style flair, we’re throwing in sun-dried tomatoes, snappy green beans, and a sprinkling of Parmesan cheese.', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_80,w_auto:100:1280/v1/hellofresh_s3/image/5ab3b4d8ae08b539081138a2-58152b86.jpg')


];
  constructor() { }

  ngOnInit() {
  }

}
