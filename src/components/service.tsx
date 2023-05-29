export interface IServiceProps {
  title: string;
  description: string
}

const Service = ({ title, description }: IServiceProps) => {
  return (
    <div>
      <h2 className='font-semibold text-2xl mb-3 tracking-wide text-gray-600'>{title}</h2>

      <p className='text-gray-500'>
        {description}
      </p>
    </div>
  );
};

export default Service;
