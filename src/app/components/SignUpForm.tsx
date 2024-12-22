"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SignupFormDemo() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Get form elements
        const form = e.currentTarget;
        const firstName = (form.elements.namedItem('firstname') as HTMLInputElement).value;
        const lastName = (form.elements.namedItem('lastname') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('text') as HTMLInputElement).value;

        // Start submission process
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Construct the mailto link
            const mailtoLink = `mailto:mmhh00@gmx.ch?subject=Neue%20Nachricht%20von%20${encodeURIComponent(firstName)}%20${encodeURIComponent(lastName)}&body=${encodeURIComponent(`
Vorname: ${firstName}
Nachname: ${lastName}
Email: ${email}

Nachricht:
${message}
      `)}`;

            // Open the user's default email client
            window.location.href = mailtoLink;

            // Reset form and show success
            form.reset();
            setSubmitStatus('success');
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black" id="signup-form">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Let us work together!
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Schreibe uns eine Nachricht und wir melden uns bei dir!
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">Vorname</Label>
                        <Input
                            id="firstname"
                            name="firstname"
                            placeholder="Tyler"
                            type="text"
                            required
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Nachname</Label>
                        <Input
                            id="lastname"
                            name="lastname"
                            placeholder="Durden"
                            type="text"
                            required
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Addresse</Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        required
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="text">Deine Nachricht</Label>
                    <textarea
                        id="text"
                        name="text"
                        placeholder="Ich brauche einen KI-Chatbot! Hier kannst du mehr Details beschreiben..."
                        rows={5}
                        required
                        className="resize-y"
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden →'}
                    <BottomGradient />
                </button>

                {/* Status messages */}
                {submitStatus === 'success' && (
                    <div className="text-green-600 mt-4">
                        Ihre Nachricht wurde erstellt. Bitte senden Sie die E-Mail in Ihrem E-Mail-Programm.
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="text-red-600 mt-4">
                        Fehler beim Öffnen des E-Mail-Clients. Bitte versuchen Sie es erneut.
                    </div>
                )}
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};


export default SignupFormDemo;