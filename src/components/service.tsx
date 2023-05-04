export interface IServiceProps {
  title: string;
  description: string
}

const Service = ({ title, description }: IServiceProps) => {
  return (
    <div>
      <h2 className='font-semibold text-2xl mb-3 tracking-wide'>{title}</h2>

      <p className='mb-12'>
        {description}
      </p>
    </div>
  );
};

export default Service;
