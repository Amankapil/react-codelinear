export default function Trendsection({ isDarkMode, toggleDarkMode }) {
  return (
    <section className="empathy-content-container">
      <div className="empathy-content">
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          Late Steve Jobs loved his childhood home for its simple design. He
          lived in working-class subdivision homes between San Francisco and San
          Jose. These were the postwar suburban homes with floor-to-ceiling
          glass walls, exposed post-and-beam construction with concrete slab
          floors and lots of sliding glass doors. These urban homes were
          developed by Joseph Eichler and his imitators in the 1950s.
        </p>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          In Jobs’ words, “His (Eichler’s) houses were smart and cheap and good.
          They brought clean design and simple taste to lower-income people.” It
          was this simplicity that formed the basis of Jobs’ passion for making
          sharply designed products for the mass market. “It was the original
          vision for Apple. That’s what we tried to do with the first Mac.
          That’s what we did with the iPod,” Jobs stated later.
        </p>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          Jobs’ vision for Apple did not just reflect in its products, but also
          in its design philosophy and eventually in its design system. The
          legacy of Steve Jobs would have never carried forward if it were not
          translated in an organized design system.
        </p>
      </div>
      <div className="empathy-content">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-h1"
        >What is a design system?</h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          A design system is a guide or a standard structure with parameters for
          design and code along with design components that will unify both. For
          instance, Apple built Human Interface Guidelines - a design system -
          that has pattern libraries, downloadable templates, the iOS UI Kit,
          style guides, and visual guidelines. The system has been built using
          Steve Jobs' design principles. Its system lists important factors such
          as -
          <div className="points">
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Visual design</p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Visual index</p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- App architecture</p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- System capabilities</p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Themes, menus, buttons </p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Icons and images</p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Fields and labels </p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Window and view </p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Indicators </p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Selectors and extensions </p>
          </div>
        </p>
      </div>
      <div className="empathy-content">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-h1"
        >What to include in a design system?</h1>
        <h2
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-sub-heading"
        >1. Design Principles </h2>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          The rules and values that drive your design team are your design
          principles. Just as we saw in the example of Quartz, you can create
          some non-negotiable ground rules that the team needs to keep in mind
          while designing any element of your product or service.
        </p>
        <h2
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-sub-heading"
        >2. A design pattern library </h2>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          Patterns are standard structures of repeated design elements that are
          used repeatedly in specific work situations. Your design system needs
          a design pattern library as a central repository of commonly used
          patterns.
        </p>
        <h2
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-sub-heading"
        >3. A UI kit </h2>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          A UI kit is a component library with a collection of UI-focused
          elements such as widgets, buttons, etc. This kit helps your teams
          create UI-friendly designs consistently, and quickly.
        </p>
        <h2
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-sub-heading"
        >4. Process guidelines</h2>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          These guidelines are interpretations of design principles.
        </p>
      </div>
      <div className="empathy-content">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-h1"
        >
          A step-by-step process to build a design system{" "}
        </h1>
        <h2
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-sub-heading"
        >
          1. Audit the existing product/offering{" "}
        </h2>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          What does your product or service stand for? How does it help people?
          List down the features of your product, service, or application and
          build a catalog of UI components, visual elements, and visual
          language. This will become the foundation of your design system.
        </p>
        <h2
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-sub-heading"
        >
          2. Create and define your design language
        </h2>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          How will you bring your design principles to life? What do you want
          your customers to feel? Excited? Curious? How does this feeling align
          with your branding language? Do you want your brand to come across as
          premium, friendly, a problem-solver, or a go-getter? Create guidelines
          about the way you want your customers to feel. Now spell out this
          feeling in words, and this will be your design language. Based on this
          language, you can create guides for color palettes, iconography,
          imagery, and typography.
        </p>
        <h2
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-sub-heading"
        >
          3. Apply your design pattern library
        </h2>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          Create clear processes to execute the design pattern library that you
          have created. Remember that there are two main types of patterns -
          functional and perceptual. Functional patterns will define the
          day-to-day usage of your product or app, while perceptual patterns
          will create a visual imprint through colors, typography, spacing, etc.
        </p>
        <h2
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-sub-heading"
        >4. Document your design system</h2>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          You need to draw out a clear plan about when and how to use the design
          principles and patterns for the teams to follow in future. Document
          shared practices, use cases and case studies to serve as guidelines
          and references. This could include things like:
          <div className="points">
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Ways of contributing to the system</p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Reporting an issue</p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Maintenance challenges</p>
            <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >- Efficiency parameters</p>
          </div>
        </p>
      </div>
      <div className="empathy-content">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="empathy-h1"
        >Get inspired</h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="empathy-para"
        >
          Check out design systems of some of these noted companies across
          industry verticals. You may get some real-life examples of the
          elements that would be needed for your design system.
        </p>
      </div>
    </section>
  );
}
