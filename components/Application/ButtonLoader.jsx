import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {cn} from '@/lib/utils'
export function ButtonLoader({ type, text, loading, className, onClick, ...props }) {
  return (
    <Button size="sm" className={cn('', className)} type={type} disabled={loading} onClick={onClick} {...props}>
      {loading && <Loader2Icon className="animate-spin" />}
      {text}
    </Button>
  );
}
