import Button from './button';
import Input from './input';

const ContactForm = () => {
  return (
    <form className='text-gray-700'>
      <div>
        <label className='uppercase font-sm font-medium tracking-wider text-gray-500'>Name</label>

        <Input
          type='text'
          placeholder='Enter your name'
          required
        />
      </div>

      <div className='mt-7'>
        <label className='uppercase font-sm font-medium tracking-wider text-gray-500'>Email Address</label>

        <Input
          type='email'
          placeholder='Enter your email address'
          required
        />
      </div>

      <div className='mt-7'>
        <label className='uppercase font-sm font-medium tracking-wider text-gray-500'>Message</label>

        <textarea
          className='mt-2 block w-full px-2 h-36 transition-all duration-100 ease-in-out resize-y border-gray-300 shadow-sm focus:border-yellow-700 focus:ring focus:ring-yellow-600 focus:ring-opacity-50'
          required
        />

        <small className='text-gray-500 text-sm'>Any non-business related submissions will be ignored.</small>
      </div>

      <div className='text-center'>
        <Button className='mt-8' type='submit'>Send message</Button>
      </div>
    </form>
  );
};

export default ContactForm;
