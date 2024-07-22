import { useNavigate } from "react-router-dom";

export function useRedirect(path) {
	const navigate = useNavigate();
	return () => navigate(path);
}
