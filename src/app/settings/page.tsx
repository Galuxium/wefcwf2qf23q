// SettingsPage.tsx

import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UserProfile } from '@/types/clerk';
import { updateUserProfile } from '@/services/clerk';

interface SettingsPageProps {}

interface SettingsPageFormData extends UserProfile {
  confirmPassword: string;
}

const SettingsPageSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const SettingsPage: React.FC<SettingsPageProps> = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsPageFormData>({
    resolver: yupResolver(SettingsPageSchema),
  });

  const onSubmit = async (data: SettingsPageFormData) => {
    try {
      await updateUserProfile(data);
      router.replace('/settings');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p>{errors.confirmPassword.message}</p>
        )}

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default SettingsPage;