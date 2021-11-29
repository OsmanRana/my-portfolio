import { Button, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css'
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        emailjs.sendForm('service_x0wkm1p', 'template_ircww07', form.current, 'user_oBHID2N3mDNyftiK7tINF')
            .then((data) => {
                console.log(data);
            }, (error) => {
                console.log(error);
            });
        alert('Request received successfully')
        reset();
    };
    return (
        <div>
            <Typography id="contactMe" sx={{ color: 'white', fontWeight: 700, fontSize: '51px', fontFamily: 'poppins', mb: 0 }} variant="h4" component="div" gutterBottom>
                <span style={{ fontWeight: 200, fontSize: '36px', color: '#ffb400' }}>contact_</span><br />
            </Typography>
            <Typography sx={{ color: 'white',  fontFamily: 'poppins', py: 1 , borderBottom: 3 }} variant="caption" display="inline" gutterBottom>
                please let me know your requirements, i will get back to you as soon as i can ...
            </Typography>
            <small></small>
            <form ref={form} className="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Your full name please" name="name" {...register("name", { required: true })} />
                {errors.customerName && <Typography sx={{ color: 'error.main', py: 3 }} gutterBottom component="div">
                    Please write your full name
                </Typography>}
                <input placeholder="Email Please" name="email" {...register("email", { required: true })} />
                {errors.customerName && <Typography sx={{ color: 'error.main', py: 3 }} gutterBottom component="div">
                    Please write your email address
                </Typography>}
                <input placeholder="Contact Number please" name="phone" type="number" {...register("phone", { required: true })} />
                {errors.rating && <Typography sx={{ color: 'error.main', py: 3 }} gutterBottom component="div">
                    Please write contact number
                </Typography>}
                <textarea style={{ height: '15vh' }} placeholder="Please Share your thoughts" name="message" {...register("message", { required: true })} />
                {errors.description && <Typography sx={{ color: 'error.main', py: 3 }} gutterBottom component="div">
                    This field is required
                </Typography>}

                <Button type="submit" sx={{ color: 'white' }} variant="outlined" value="Send">Submit</Button>
            </form>
        </div>
    );
};

export default ContactForm;