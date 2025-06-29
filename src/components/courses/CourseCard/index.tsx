import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { Props } from './tipes';


export default function CourseCard({ course, currentRating, onRate }: Props) {
  const router = useRouter();

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 min-h-[280px] max-h-[280px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-6 flex flex-col justify-between shadow-md transition-transform hover:scale-[1.02] hover:brightness-110 hover:shadow-lg">
      <div>
        <h3 className="text-xl font-semibold text-primary mb-2">
          {course.title}
        </h3>
        <p className="text-sm text-[var(--text)] mb-2">
          {course.type.charAt(0).toUpperCase() + course.type.slice(1)}
        </p>
        <p className="text-sm text-[var(--text)]">{course.description}</p>
      </div>
      <div className="w-full mt-4 flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesomeIcon
              key={star}
              icon={star <= currentRating ? fullStar : emptyStar}
              onClick={() => onRate(star)}
              className="text-yellow-500 text-2xl cursor-pointer transition-transform hover:scale-125 drop-shadow"
            />
          ))}
        </div>
        <button
          onClick={() => router.push(`/courses/${course.id}`)}
          className="w-full px-4 py-2 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-purple-800 transition cursor-pointer"
        >
          <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
          Acessar curso
        </button>
      </div>
    </div>
  );
}
