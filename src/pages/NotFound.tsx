import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background">
    <h1 className="font-heading font-bold text-7xl text-primary mb-4">404</h1>
    <h2 className="font-heading font-semibold text-2xl mb-3">Page Not Found</h2>
    <p className="text-muted-foreground mb-8 max-w-md">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <Button asChild className="rounded-lg font-semibold">
      <Link to="/">Return Home</Link>
    </Button>
  </div>
);

export default NotFound;
