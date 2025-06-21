import { ChangeEvent } from 'react'
import { useForm } from '@tanstack/react-form'
import { useNavigate } from '@tanstack/react-router'
import { useQueryClient } from '@tanstack/react-query'

// Icons
import { HiOutlineMail } from 'react-icons/hi'
import { MdLockOutline } from 'react-icons/md'

// Packages
import { Button, Input, PasswordInput } from '@core/components'

// Data
import { loginWithEmailMutation, getCurrentProfileQueryOptions, getCurrentUserQueryOptions } from '@/data'

export function LoginForm() {
    const navigate = useNavigate()
    const mutation = loginWithEmailMutation()
    const queryClient = useQueryClient()

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        onSubmit: ({ value }) => {
            console.log(value)

            // mutation.mutate(value, {
            //     onSuccess: async () => {
            //         await Promise.all([
            //             queryClient.ensureQueryData(getCurrentUserQueryOptions()),
            //             queryClient.ensureQueryData(getCurrentProfileQueryOptions()),
            //         ])
            //     },
            //     onError: (e) => {
            //         console.log(e)
            //     },
            //     onSettled: () => {
            //         navigate({
            //             to: '/',
            //         })
            //     },
            // })
        },
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
            }}
            className="flex flex-col gap-3 w-full"
        >
            <form.Field
                name="email"
                children={(field) => {
                    return (
                        <Input
                            type="text"
                            value={field.state.value}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => field.handleChange(e.target.value)}
                            placeholder="example@website.com"
                            leading={<HiOutlineMail />}
                        />
                    )
                }}
            />

            <form.Field
                name="password"
                children={(field) => (
                    <PasswordInput
                        value={field.state.value}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => field.handleChange(e.target.value)}
                        placeholder="password"
                        leading={<MdLockOutline />}
                    />
                )}
            />

            <button onClick={form.handleSubmit}>
                {mutation.isPending || !mutation.isIdle ? 'Logging In' : 'Login'}
            </button>
        </form>
    )
}
