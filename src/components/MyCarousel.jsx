// components/MyCarousel.jsx
import { Carousel as FlowbiteCarousel } from "flowbite-react";

function MyCarousel() {
  return (
    <div className="h-56 w-full sm:h-64 md:h-56 lg:h-56">
      <FlowbiteCarousel indicators={false} slideInterval={2000}>
        <img src="/HTML5CSS3JS.jpg" alt="JavaScript" className="object-contain h-full w-9/12" />
        <img src="/java.jpg" alt="Java" className="object-contain h-full w-9/12" />
        <img src="/Tailwind.png" alt="Tailwind CSS" className="object-contain h-full w-9/12" />
        <img src="/React.png" alt="React" className="object-contain h-full w-9/12" />
        <img src="/vite.webp" alt="Vite" className="object-contain h-full w-9/12" />
        <img src="/gradle.jpg" alt="Gradle" className="object-contain h-full w-9/12" />
        <img src="/spring.jpg" alt="Spring" className="object-contain h-full w-9/12" />
        <img src="/springboot.jpg" alt="Spring Boot" className="object-contain h-full w-9/12" />
        <img src="/gitgithub.png" alt="GitHub" className="object-contain h-[70%] w-9/12" />
      </FlowbiteCarousel>
    </div>
  );
}

export default MyCarousel;
