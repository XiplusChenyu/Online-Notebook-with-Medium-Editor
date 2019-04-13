from django.shortcuts import render
from .models import Topic, Entry
from .forms import TopicForm, EntryForm
from django.http import HttpResponseRedirect
from django.urls import reverse


# Create your views here.
def index(request):
    return render(request, 'web_app/index.html',  {"title": "Home"})


def topics(request):
    topics = Topic.objects.order_by('date_added')
    context = {'topics': topics,
               "title": "Topics"}
    return render(request, 'web_app/topics.html', context)


def topic(request, topic_id):
    topic = Topic.objects.get(id=topic_id)
    entries = topic.entry_set.order_by('-date_added')
    context = {'topic': topic,
               'entries': entries,
               "title": topic}
    return render(request, 'web_app/topic.html', context)


def add_topic(request):
    if not request.method == 'POST':
        form = TopicForm()

    else:
        form = TopicForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect((reverse('web_app:topics')))
    context = {'form': form,
               'title': "Add Topic"}
    return render(request, 'web_app/new_topic.html', context)


def add_entry(request, topic_id):
    current_topic = Topic.objects.get(id=topic_id)
    print(topic_id)

    if not request.method == 'POST':
        form = EntryForm()

    else:
        form = EntryForm(request.POST)
        if form.is_valid():
            new_entry = form.save(commit=False)
            new_entry.topic = current_topic
            new_entry.save()
            return HttpResponseRedirect((reverse('web_app:topic', args=[topic_id])))

    context = {'form': form,
               'topic': current_topic,
               'title': "Add Entry"}

    return render(request, 'web_app/new_entry.html', context)


def edit_entry(request, entry_id):
    current_entry = Entry.objects.get(id=entry_id)
    current_topic = current_entry.topic
    print(current_entry)
    if not request.method == 'POST':
        form = EntryForm(instance=current_entry)
    else:
        form = EntryForm(instance=current_entry, data=request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect((reverse('web_app:topic', args=[current_topic.id])))

    context = {'form': form,
               'topic': current_topic,
               'entry': current_entry,
               'title': "Edit Entry"}

    return render(request, 'web_app/edit_entry.html', context)


def del_entry(request, entry_id):
    current_entry = Entry.objects.get(id=entry_id)
    current_topic_id = current_entry.topic.id
    Entry.objects.get(id=entry_id).delete()
    return HttpResponseRedirect((reverse('web_app:topic', args=[current_topic_id])))


def del_topic(request, topic_id):
    Topic.objects.get(id=topic_id).delete()
    return HttpResponseRedirect((reverse('web_app:topics')))
