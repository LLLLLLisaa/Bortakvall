type ErrorProps = {
    message?: string;
  };
  
  /**
 * Error
 *
 * Generic error display component.
 *
 * - Displays a custom error message when provided
 * - Falls back to a default message otherwise
 */
  export default function Error({ message }: ErrorProps) {
    return (
      <div className="alert alert-danger my-3" role="alert">
      {message ?? "Något gick fel. Försök igen senare."}
    </div>
    );
  }
 