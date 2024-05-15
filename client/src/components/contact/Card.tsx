type ContactCardProps = {
  title: string;
  description: string;
};

const ContactCard = ({ title, description }: ContactCardProps) => {
  return (
    <div className="min-w-[17.5rem] h-fit bg-neutral-600  backdrop-filter backdrop-blur-lg bg-opacity-20 px-5 py-8  border border-neutral-900 rounded-xl flex flex-col gap-5 justify-between">
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
};

export default ContactCard;
