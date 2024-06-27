import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">About Us</h2>
          <p className="text-gray-700 text-lg">Discover our story, mission, and values</p>
        </div>

        <div className="flex flex-col lg:flex-row mb-12 items-center">
          <div className="lg:w-1/3 lg:pr-6">
            <img src="https://pinchofyum.com/wp-content/assets/images/about/lindsay-hero.jpg" alt="About Us" className="rounded-lg w-full h-auto" />
          </div>
          <div className="lg:w-2/3 lg:pl-6 mt-6 lg:mt-0">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">About Us</h3>
            <p className="text-gray-700 leading-relaxed">
              I'm the voice, author, and creator behind Pinch of Yum. What started as a casual hobby over 14 years ago in 2010 while I was working as a fourth-grade teacher has now grown into a full-blown business (!!) that reaches millions of people with fun recipes each month, with content that has been featured on The Kitchn, CNN, Refinery29, Brit + Co, POPSUGAR, Huffington Post, The Everymom, PureWow, and more.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              I live in Saint Paul, MN with my husband Bjork and our dog Sage. My favorite things in life are a big plate of pad Thai, sunny days, and going to the dog park.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mb-12 items-center">
          <div className="lg:w-2/3 lg:pr-6 mt-6 lg:mt-0 order-last lg:order-first">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">Prevent Diabetes Culinary Program</h3>
            <p className="text-gray-700 leading-relaxed">
              The prevent diabetes culinary program is a 2-6 month virtual or in-person program aimed to prevent diabetes in participants of African descent. The program is a combination of nutrition education and culinary classes preparing culture-focused recipes.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This program increases the consumption of fruit, vegetables, lean protein, and whole grains with applicable lifestyle changes and habits. In this program, we offer step-by-step education on how to properly select, cook, and store produce while maintaining its nutrients and providing optimal nutritional value. Each group is also taught about stress management, a grocery store tour, physical activity, and tracking intake.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Through our interactive classes, participants will learn practical skills, such as proper meal planning, healthy cooking techniques, and portion control, adapting traditional recipes to be more health-conscious, providing tips and tricks for maximizing nutrition without compromising flavor.
            </p>
          </div>
          <div className="lg:w-1/3 lg:pl-6">
            <img src="https://cdn.prod.website-files.com/5e86c7170f1ab21474c3f2a4/5ef1d04b4056011f67df2ed7_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpg" alt="Prevent Diabetes Culinary Program" className="rounded-lg w-full h-auto" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mb-12 items-center">
          <div className="lg:w-1/3 lg:pr-6">
            <img src="https://www.fda.gov/files/9-Major-Food-Allergens_0.png" alt="Nutrition Education" className="rounded-lg w-full h-auto" />
          </div>
          <div className="lg:w-2/3 lg:pl-6 mt-6 lg:mt-0">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">Nutrition Education</h3>
            <p className="text-gray-700 leading-relaxed">
              Our interactive classes are designed for both children and adults, offering a unique opportunity to learn how to enjoy foods from their own cultural backgrounds in a nutritious and wholesome way.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We understand the importance of preserving cultural heritage while prioritizing health and well-being. That's why our programs focus on teaching individuals how to incorporate traditional and culturally significant foods into a balanced diet.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Join us on this exciting journey of embracing cultural diversity and promoting health through food.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mb-12 items-center">
          <div className="lg:w-2/3 lg:pr-6 mt-6 lg:mt-0 order-last lg:order-first">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">Professional Development Training</h3>
            <p className="text-gray-700 leading-relaxed">
              Our program is designed to equip dietitians and healthcare professionals with the essential skills and knowledge needed to establish meaningful connections with the communities they serve by enhancing their cultural competence.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We recognize the critical role that cultural understanding plays in providing effective healthcare and nutrition guidance. Our program focuses on fostering cultural competence by offering in-depth education and practical strategies to better engage with diverse populations.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Through our comprehensive curriculum, ranging from 60 minutes to 2-day training, participants will develop the necessary tools to navigate cultural differences, respect unique traditions, and tailor their services to meet the specific needs of individuals from various backgrounds.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Using interactive sessions that explore cultural beliefs, traditions, and dietary practices, enables professionals to develop a heightened awareness and appreciation for cultural diversity.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This program equips participants with the knowledge to provide culturally sensitive nutrition recommendations, develop personalized plans, and support clients in achieving their health goals while respecting their cultural identity.
            </p>
          </div>
          <div className="lg:w-1/3 lg:pl-6">
            <img src="https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png" alt="Professional Development Training" className="rounded-lg w-full h-auto" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 lg:pr-6">
            <img src="https://static.vecteezy.com/system/resources/previews/024/841/278/non_2x/fresh-food-in-human-body-nutrition-for-human-human-body-made-of-vegetable-and-fruits-isolated-on-transparent-background-healthy-food-concept-generative-ai-free-png.png" alt="Nutrition Education" className="rounded-lg w-full h-auto" />
          </div>
          <div className="lg:w-2/3 lg:pl-6 mt-6 lg:mt-0">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">Nutrition Education</h3>
            <p className="text-gray-700 leading-relaxed">
              Our interactive classes are designed for both children and adults, offering a unique opportunity to learn how to enjoy foods from their own cultural backgrounds in a nutritious and wholesome way.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We understand the importance of preserving cultural heritage while prioritizing health and well-being. That's why our programs focus on teaching individuals how to incorporate traditional and culturally significant foods into a balanced diet.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Join us on this exciting journey of embracing cultural diversity and promoting health through food.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
