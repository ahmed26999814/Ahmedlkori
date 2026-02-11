"use client";

import React from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContent } from "@/components/providers/content-provider";

export default function AdminPage() {
  const { telegramReviews, whatsappGroups, summaries, places, updateContent, resetContent } =
    useContent();
  const [password, setPassword] = React.useState("");
  const [authorized, setAuthorized] = React.useState(false);
  const [data, setData] = React.useState({
    telegramReviews: JSON.stringify(telegramReviews, null, 2),
    whatsappGroups: JSON.stringify(whatsappGroups, null, 2),
    summaries: JSON.stringify(summaries, null, 2),
    places: JSON.stringify(places, null, 2)
  });

  const onLogin = () => {
    if (password === (process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin")) {
      setAuthorized(true);
      toast.success("?? ?????? ????? ???????");
    } else {
      toast.error("???? ?????? ??? ?????");
    }
  };

  const onSave = () => {
    try {
      const next = {
        telegramReviews: JSON.parse(data.telegramReviews),
        whatsappGroups: JSON.parse(data.whatsappGroups),
        summaries: JSON.parse(data.summaries),
        places: JSON.parse(data.places)
      };
      updateContent(next);
      toast.success("?? ??? ????????? ??????");
    } catch {
      toast.error("???? ?? ??? JSON");
    }
  };

  const onReset = () => {
    resetContent();
    toast.message("??? ????? ???????? ??????????");
  };

  if (!authorized) {
    return (
      <div className="space-y-6">
        <PageHeader
          title="???? ???????"
          description="???? ????? ????? ???? ?????? ???????? ??????."
        />
        <div className="max-w-md rounded-3xl border border-white/10 bg-white/5 p-6">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="???? ??????"
          />
          <Button className="mt-4" onClick={onLogin}>
            ????
          </Button>
          <p className="mt-3 text-xs text-white/50">
            ??? ??? ????????? ?? ??????? ???. ?????? ????? ?????? ?????? ??????
            Supabase.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="???? ???????"
        description="????? ???????? ?????? (??? ???? ?? ???????)."
      />
      <div className="space-y-4">
        <label className="text-sm text-white/70">Telegram Reviews</label>
        <textarea
          rows={8}
          className="w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-xs text-white/70"
          value={data.telegramReviews}
          onChange={(e) => setData((prev) => ({ ...prev, telegramReviews: e.target.value }))}
        />
      </div>
      <div className="space-y-4">
        <label className="text-sm text-white/70">WhatsApp Groups</label>
        <textarea
          rows={8}
          className="w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-xs text-white/70"
          value={data.whatsappGroups}
          onChange={(e) => setData((prev) => ({ ...prev, whatsappGroups: e.target.value }))}
        />
      </div>
      <div className="space-y-4">
        <label className="text-sm text-white/70">Summaries</label>
        <textarea
          rows={8}
          className="w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-xs text-white/70"
          value={data.summaries}
          onChange={(e) => setData((prev) => ({ ...prev, summaries: e.target.value }))}
        />
      </div>
      <div className="space-y-4">
        <label className="text-sm text-white/70">Places</label>
        <textarea
          rows={6}
          className="w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-xs text-white/70"
          value={data.places}
          onChange={(e) => setData((prev) => ({ ...prev, places: e.target.value }))}
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="glow" onClick={onSave}>
          ??? ?????????
        </Button>
        <Button variant="outline" onClick={onReset}>
          ??????? ?????????
        </Button>
      </div>
    </div>
  );
}
