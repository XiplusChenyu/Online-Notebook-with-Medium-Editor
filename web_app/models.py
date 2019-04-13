from django.db import models

# Create your models here.


class Topic(models.Model):

    text = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text


class Entry(models.Model):
    topic = models.ForeignKey(Topic,  on_delete=models.CASCADE)

    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.text = self.text.split('<div class="medium-insert-buttons"')[0]
        return super(Entry, self).save(*args, **kwargs)

    class Meta:
        verbose_name_plural = 'entries'

    def __str__(self):
        return self.text[:50] + "..." if len(self.text[:]) > 50 else self.text
