const spotlightA = `
  <h3>Business Success Story: Green Harvest Organics</h3>
  <p>Chikondi Textiles, a woman-led enterprise in Dedza, joined the chamber in 2023 seeking mentorship and market access. With support from the chamber&apos;s SME accelerator, they secured a grant to upgrade their looms and received training in digital marketing. Within a year, their monthly revenue tripled, and they now export handwoven fabrics to South Africa and Zambia.
  “The chamber believed in us before the world did,” says founder Thokozani Banda.</p>
`;
const spotlightB = `<h3>Upcoming Event: Malawi Business Expo 2025</h3>
<p>Date: October 18&ndash;20, 2025
Location: Bingu International Convention Centre, Lilongwe
Theme: “Innovation, Inclusion, Investment”
This flagship event brings together over 200 local and international businesses, investors, and policymakers. Highlights include youth pitch competitions, SME showcases, and panels on digital transformation.
Register now to reserve your spot and connect with Malawi&apos;s economic future.</p>`
;

const spotlightC = `<h3>Community Impact: Lake Salima Clean-Up Initiative</h3>
  <p>In July 2025, the chamber partnered with local youth groups and environmental NGOs to organize a large-scale clean-up of Lake Salima&apos;s shoreline. Over 500 volunteers participated, collecting 3.2 tons of plastic waste and planting 1,000 native trees.
  The initiative not only restored the lake&apos;s beauty but also sparked new eco-tourism interest and job opportunities for local guides and artisans.

  Would you like help turning these into HTML spotlight cards or rotating features for your homepage? We could even add icons, animations, or accessibility tags to make them shine.</p>`;


function mySpotlight(){
  let random = Math.random();

  if (random < 1/3) {
    document.querySelector('.spotlight').innerHTML = spotlightA;
  } else if (random < 2/3) {
    document.querySelector('.spotlight').innerHTML = spotlightB;
  } else {
    document.querySelector('.spotlight').innerHTML = spotlightC;
  }
}
mySpotlight();
setInterval(mySpotlight, 3000);
