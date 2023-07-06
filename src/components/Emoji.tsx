import { Image, ImageProps } from '@chakra-ui/react';
import bullsEyeIcon from '../assets/bulls-eye.webp'
import mehIcon from '../assets/meh.webp'
import thumbsUpIcon from '../assets/thumbs-up.webp'

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

    // Index signature
    // We tell the TS compiler that the object can have any number of keys and key is of type number;
    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: mehIcon, alt: 'meh', boxSize: '25px' },
        4: { src: thumbsUpIcon, alt: 'recommended', boxSize: '25px' },
        5: { src: bullsEyeIcon, alt: 'exceptional', boxSize: '35px' },
    }

    // Alternative this can be written with a Map type.
    // const emojiMap2: Map<number, ImageProps> = new Map<number, ImageProps>([
    //     [1, { src: mehIcon, alt: 'meh' }],
    //     [4, { src: thumbsUpIcon, alt: 'recommended' }],
    //     [5, { src: bullsEyeIcon, alt: 'exceptional' }],
    // ])

    return (
        <Image marginTop={1} {...emojiMap[rating]} />
    )
}

export default Emoji