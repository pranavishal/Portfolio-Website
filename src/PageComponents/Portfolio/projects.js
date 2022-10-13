import MotorMayhem from "./MotorMayhem_Portfolio.PNG";
import RockStars from "./RockStars_Portfolio_Photo.PNG";
import PersonalSite from "./PersonalSite_Portfolio.PNG";
import OpenGL from "./openGl.PNG";
import Pokemon from "./ATLINT.PNG";
import Platformer from "./image.png";

export const projects = [
  {
    title: "Rock Stars",
    description:
      "Mobile game developed with C# and Unity for the Google Play Store.",
    image: RockStars,
    url: "https://www.youtube.com/watch?v=78d6JHu41YU&ab_channel=PanamaInk",
  },
  {
    title: "Motor Mayhem",
    description:
      "Second mobile game I developed with Unity and C#. Motor Mayhem ranked as a top 100 iOS racing game as of September 2022. I was able to improve the user experience by collecting feedback from a sample of test users in an agile manner, and utilized Plastic SCM to implement version control.",
    image: MotorMayhem,
    url: "https://www.youtube.com/watch?v=2C005k-kujs&ab_channel=PanamaInk",
  },
  {
    title: "All That Lies in the North",
    description:
      "Unity2D turn-based rpg, developed for the GameDevTV Game Jam. Implemented turn-based combat system similar to Pokemon, character stats, experience levels, inventory, quest and save system.",
    image: Pokemon,
    url: "https://youtu.be/EgBXkn-KGuw",
  },
  {
    title: "BroBot",
    description:
      "Unity 3D Platformer made for the University of Waterloo GI Game Jam in which I placed second. Implemented enemy AI, basic melee combat, checkpoints, and a level select system.",
    image: Platformer,
    url: "https://youtu.be/2zQslzGy0Os",
  },
  {
    title: "OpenGL 3D Camera",
    description:
      "A camera to traverse a scene using C++ and OpenGL. I developed vertex, fragment, and geometric shaders to create shapes, and OOP principles to render multiple shapes to the scene, and handles uder input using GLFW.",
    image: OpenGL,
    url: "https://youtu.be/QFYwbL9k1wo",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "My portfolio website I made with React. It is the site you are currently looking at.",
    image: PersonalSite,
    url: "#home",
  },
];
