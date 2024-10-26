import EventList from "../Pages/EventList/EventList";
import FilterEvents from "../Pages/FilterEvents/FilterEvents";
import EventDetails from "../Pages/EventDetails/EventDetails";
import BookingPage from "../Pages/BookingPage/BookingPage";  // Import the booking page

// Define your routes array
export const routes = [
  {
    path: "/",  // Route for event list page
    element: <EventList />,
  },
  
  {
    path: "/find-events",  // Route for filtered events page
    element: <FilterEvents />,
  },

  {
    path: "/events/:id",  // Dynamic route for event details based on id
    element: <EventDetails />,
  },

  {
    path: "/booking/:id",  // Route for booking page with event ID
    element: <BookingPage />,
  }
];
