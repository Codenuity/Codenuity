type ContactCardProps = {
  title: string;
  description: string;
};

const ContactCard = ({ title, description }: ContactCardProps) => {
  return (
    <div className="flex h-fit flex-col justify-between gap-5 rounded-xl border border-neutral-900 bg-neutral-600 bg-opacity-20 px-5 py-8 backdrop-blur-lg backdrop-filter sm:min-w-[17.5rem]">
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
};

export default ContactCard;
