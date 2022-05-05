import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackTypeContentStep";

export const feedBackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    }
  },
}

export type FeedBackTypes = keyof typeof feedBackTypes;

export function WidgetForm() {
  const [feedBackType, setFeedBackType] = useState<FeedBackTypes | null>(null);

  function handleRestartFeedback() {
    setFeedBackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedBackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedBackType} onFeedbackRestartRequested={handleRestartFeedback} />
      )
      }
      <footer>
        Feito com amor por <a className="underline underline-offset-2" href="https://github.com/adriangvaldes">Adrian Valdes</a>
      </footer>
    </div >
  );
}