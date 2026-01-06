type ErrorProps = {
    message?: string;
  };
  
  export default function Error({ message }: ErrorProps) {
    return (
      <p>
        {message ?? "Något gick fel. Försök igen senare."}
      </p>
    );
  }
  