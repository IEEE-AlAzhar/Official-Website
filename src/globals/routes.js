import HomePage from "modules/static-pages/home/components/page";
import AboutPage from "modules/static-pages/about/components/page";

import EventsListPage from "modules/events/components/eventsListPage";
import SingleEventPage from "modules/events/components/singleEventPage";
import EventFormPage from "modules/events/components/eventFormPage";

import BlogListPage from "modules/blog/components/blogListPage";
import SingleBlogPage from "modules/blog/components/singleBlogPage";

import ContactPage from "modules/contact/components/page";

export default [
  { path: "/", component: HomePage, label: "Home" },
  { path: "/about-us", component: AboutPage, label: "About us" },
  { path: "/events", component: EventsListPage, label: "Events" },
  { path: "/events/:id", component: SingleEventPage },
  { path: "/events/:id/register", component: EventFormPage },
  { path: "/blog", component: BlogListPage, label: "Blog" },
  { path: "/blog/:id/:title", component: SingleBlogPage },
  { path: "/contact-us", component: ContactPage, label: "Contact us" },
];
