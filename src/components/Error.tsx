type ErrorProps = {
    message?: string;
  };
  
  export default function Error({ message }: ErrorProps) {
    return (
      <div className="alert alert-danger my-3" role="alert">
      {message ?? "Något gick fel. Försök igen senare."}
    </div>
    );
  }
 